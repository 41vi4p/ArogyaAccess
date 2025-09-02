from flask import (
    Flask,
    render_template,
    redirect,
    flash,
    url_for,
    session,
    request,
    jsonify
)

from datetime import timedelta

from firebase_admin.exceptions import FirebaseError
from werkzeug.routing import BuildError


from flask_bcrypt import Bcrypt,generate_password_hash, check_password_hash

from flask_login import (
    UserMixin,
    login_user,
    LoginManager,
    current_user,
    logout_user,
    login_required,
)

from app import create_app,db,login_manager,bcrypt
from models import User
from forms import login_form,register_form

import set
import pyrebase
import google.generativeai as genai


app = Flask(__name__, template_folder="templates")

firebase = pyrebase.initialize_app(set.config)
auth = firebase.auth()

# Configure Gemini AI
genai.configure(api_key=set.GEMINI_API_KEY)

# Set up the model for medical chatbot
generation_config = {
    "temperature": 0.7,
    "top_p": 1,
    "top_k": 1,
    "max_output_tokens": 2048,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
]

model = genai.GenerativeModel(
    model_name="gemini-1.0-pro",
    generation_config=generation_config,
    safety_settings=safety_settings
)

@login_manager.user_loader
def load_user(user_id):
    try:
        user_ref = db.collection('users').document(user_id)
        user_data = user_ref.get()
        if user_data.exists:
            data = user_data.to_dict()
            return User(data['username'], data['email'], data['password'])
        return None
    except Exception as e:
        print(f"Error loading user: {e}")
        return None

app = create_app()

@app.before_request
def session_handler():
    session.permanent = True
    app.permanent_session_lifetime = timedelta(minutes=1)

@app.route("/", methods=("GET", "POST"), strict_slashes=False)
def index():
    return render_template("index.html",title="Home")


@app.route("/login/", methods=("GET", "POST"), strict_slashes=False)
def login():
    form = login_form()

    if form.validate_on_submit():
        email = form.email.data
        pwd = form.pwd.data
        try:
            user = auth.sign_in_with_email_and_password(email, pwd)
            account_info = auth.get_account_info(user['idToken'])
            if account_info['users'][0]['emailVerified'] == False:
                flash("Please Verify Your Email!", "danger")
            else:
                # Get user from database and login
                db_user = User.get_by_email(email)
                if db_user:
                    login_user(db_user)
                    return redirect(url_for('dashboard'))
                else:
                    flash("User not found in database!", "danger")
        except Exception as e:
            print(f"Login error: {e}")
            flash("Invalid Username or password!", "danger")
        
        # except FirebaseError as e:
        #     flash(e, "danger")

    return render_template("login.html",
        form=form,
        text="Login",
        title="Login",
        btn_action="Login"
        )





# Register route
@app.route("/register/", methods=("GET", "POST"), strict_slashes=False)
def register():
    form = register_form()
    if form.validate_on_submit():
        try:
            email = form.email.data
            pwd = form.pwd.data
            username = form.username.data
            
            # Create user in Firebase Auth
            newuser = auth.create_user_with_email_and_password(email, pwd)
            auth.send_email_verification(newuser['idToken'])
            
            # Save user to Firestore
            user = User(username, email, pwd, newuser['localId'])
            user.save()
            
            flash(f"Account Successfully created\nCheck your Email & Verify Your Account.", "success")
            return redirect(url_for("login"))
        
        except FirebaseError as e:
            # Clean up if user was created in Firestore
            try:
                db.collection('users').document(username).delete()
            except:
                pass
            flash(f"Something went wrong: {str(e)}", "danger")
        except Exception as e:
            print(f"Registration error: {e}")
            flash(f"Something went wrong!", "danger")

        # except InvalidRequestError:
        #     db.collection('users').document(username).delete()
        #     flash(f"Something went wrong!", "danger")
        # except IntegrityError:
        #     db.collection('users').document(username).delete()
        #     flash(f"User already exists!.", "warning")
        # except DataError:
        #     db.collection('users').document(username).delete()
        #     flash(f"Invalid Entry", "warning")
        # except InterfaceError:
        #     db.collection('users').document(username).delete()
        #     flash(f"Error connecting to the database", "danger")
        # except DatabaseError:
        #     db.collection('users').document(username).delete()
        #     flash(f"Error connecting to the database", "danger")
        except BuildError:
            db.collection('users').document(username).delete()
            flash(f"An error occured !", "danger")
    return render_template("auth.html",
        form=form,
        text="Create account",
        title="Register",
        btn_action="Register account"
        )



@app.route("/firstaid")
def firstaid():
    return render_template("firstaid.html",title="firstaid")

@app.route("/chatbot")
@login_required
def chatbot():
    return render_template("chatbot.html",title="chatbot")

@app.route("/dashboard")
@login_required
def dashboard():
    return render_template("dashboard.html",title="dashboard")

@app.route("/about")
def about():
    return render_template("about.html",title="about")


@app.route("/chat")
def chat():
    return render_template("chat.html",title="chat")

@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))


@app.route("/api/chat", methods=["POST"])
@login_required
def chat_api():
    try:
        data = request.get_json()
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({'error': 'No message provided'}), 400
        
        # Create a medical-focused prompt
        medical_prompt = f"""
        You are a helpful medical AI assistant for a rural healthcare platform. 
        Provide accurate, helpful medical information while being clear about limitations.
        Always emphasize when to seek professional medical care.
        Keep responses clear and accessible for rural patients.
        
        Patient question: {user_message}
        
        Guidelines:
        - Provide general medical information only
        - Always recommend consulting healthcare professionals for diagnosis
        - Be empathetic and supportive
        - Use simple, clear language
        - For emergencies, strongly advise immediate medical attention
        - Don't provide specific dosages or prescription advice
        """
        
        response = model.generate_content(medical_prompt)
        bot_response = response.text
        
        return jsonify({'response': bot_response})
        
    except Exception as e:
        print(f"Chat API error: {e}")
        return jsonify({
            'response': 'I apologize, but I\'m having trouble processing your request. Please try again or consult a healthcare professional.'
        }), 500


if __name__ == "__main__":
    app.run(debug=True)
    