from flask import Flask
from story_app.config import config
from story_app.core import db



def create_app(config_name):
	app = Flask(__name__)

	app.config.from_object(config[config_name])
	config[config_name].init_app()

	db.init_app(app)

	return app
