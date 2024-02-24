from flask import (
    Flask,
    render_template,
    redirect,
    flash,
    url_for,
    session
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


app = Flask(__name__, template_folder="templates")

firebase = pyrebase.initialize_app(set.config)
auth = firebase.auth()

@login_manager.user_loader
def load_user(user_id):
    user_ref = db.reference(f'/users/{user_id}')
    user_data = user_ref.get()
    if user_data:
        return User(user_data) # assuming you have a User class that takes a dictionary as input
    else:
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
            auth.sign_in_with_email_and_password(email,pwd)
            user = auth.sign_in_with_email_and_password(email, pwd)
            account_info = auth.get_account_info(user['idToken'])
            if account_info['users'][0]['emailVerified'] == False:
                flash("Please Verify Your Email!", "danger")
            else:
                return render_template("chat.html",title="404")#redirect(url_for('404.html'))
        except:
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
            newuser = auth.create_user_with_email_and_password(email, pwd)
            auth.send_email_verification(newuser['idToken'])
            
            flash(f"Account Succesfully created\nCheck your Email & Verify Your Account.", "success")
            return redirect(url_for("login"))
        
        except FirebaseError as e:
            db.collection('users').document(username).delete()
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

@app.route("/about")
def about():
    return render_template("about.html",title="about")


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))


if __name__ == "__main__":
    app.run(debug=True)
    