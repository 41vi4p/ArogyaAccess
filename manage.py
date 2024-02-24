
# def deploy():
# 	"""Run deployment tasks."""
# 	from app import create_app,db
# 	from flask_migrate import upgrade,migrate,init,stamp
# 	from models import User

# 	app = create_app()
# 	app.app_context().push()
# 	db.create_all()

# 	# migrate database to latest revision
# 	init()
# 	stamp()
# 	migrate()
# 	upgrade()
	
# deploy()
	
from firebase_admin import db, initialize_app
import set

firebase = initialize_app(config)



# data to save
data = {
  "name": "Mortimer 'Morty' Smith"
}

# Push data to the database
db.child("users").push(data)