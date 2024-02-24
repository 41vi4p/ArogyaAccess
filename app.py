from flask import Flask
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from firebase_admin import credentials, firestore, initialize_app
import config

from flask_login import (
    UserMixin,
    login_user,
    LoginManager,
    current_user,
    logout_user,
    login_required,
)

login_manager = LoginManager()
login_manager.session_protection = "strong"
login_manager.login_view = "login"
login_manager.login_message_category = "info"

# Initialize Firestore DB
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
migrate = Migrate()
bcrypt = Bcrypt()


def create_app():
    # Create and configure the app object
    app = Flask(__name__)
    app.config.from_object(config)
    # Load the database connection extension
    
    #db.init_app(app)
    # Load the other extensions and settings as needed
    login_manager.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    
    return app