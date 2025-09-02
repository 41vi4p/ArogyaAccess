from app import db
from flask_login import UserMixin


class User(UserMixin):
    def __init__(self, username, email, password, uid=None):
        self.username = username
        self.email = email
        self.password = password
        self.id = uid or username  # Use uid if provided, otherwise use username

    def to_dict(self):
        return {
            'username': self.username,
            'email': self.email,
            'password': self.password,
            'uid': self.id
        }

    def save(self):
        """Save user to Firestore"""
        try:
            db.collection('users').document(self.id).set(self.to_dict())
            return True
        except Exception as e:
            print(f"Error saving user: {e}")
            return False

    @staticmethod
    def get(user_id):
        """Get user from Firestore by user ID"""
        try:
            user_ref = db.collection('users').document(user_id)
            user_doc = user_ref.get()
            if user_doc.exists:
                user_data = user_doc.to_dict()
                return User(
                    user_data['username'], 
                    user_data['email'], 
                    user_data['password'],
                    user_data.get('uid', user_id)
                )
            return None
        except Exception as e:
            print(f"Error getting user: {e}")
            return None
    
    @staticmethod
    def get_by_email(email):
        """Get user from Firestore by email"""
        try:
            users_ref = db.collection('users')
            query_ref = users_ref.where('email', '==', email).limit(1).stream()
            for doc in query_ref:
                user_data = doc.to_dict()
                return User(
                    user_data['username'], 
                    user_data['email'], 
                    user_data['password'],
                    doc.id
                )
            return None
        except Exception as e:
            print(f"Error getting user by email: {e}")
            return None

    def __repr__(self):
        return f'<User {self.username}>'