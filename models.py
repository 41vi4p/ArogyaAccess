from app import db
import flask_login
from google.cloud import firestore

# class User(db.Document):
#     __collection_name__ = "user"

#     id = db.IntField(primary_key=True)
#     username = db.StringField(max_length=80, unique=True, nullable=False)
#     email = db.StringField(max_length=120, unique=True, nullable=False)
#     pwd = db.StringField(max_length=300, nullable=False, unique=True)

#     def __repr__(self):
#         return f'<User {self.username}>'
    
# class User(UserMixin, db.document):
#     __collection_name__ = "user"

#     id = db.Field(db.Integer, primary_key=True)
#     username = db.Field(db.String(80), unique=True, nullable=False)
#     email = db.Field(db.String(120), unique=True, nullable=False)
#     pwd = db.Field(db.String(300), nullable=False, unique=True)

#     def __repr__(self):
#         return f'<User {self.username}>'





class User:
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def to_dict(self):
        return {
            'username': self.username,
            'email': self.email,
            'password': self.password,
        }

    def save(self):
        db.collection('login').document(self.username).set(self.to_dict())

    @staticmethod
    def get(username):
        user_dict = db.collection('login').document(username).get().to_dict()
        if user_dict is not None:
            return User(user_dict['username'], user_dict['email'], user_dict['password'])
        else:
            return None
