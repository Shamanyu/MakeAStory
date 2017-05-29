from flask import Flask
from config import config
from core import db



def create_app(config_name):
	app = Flask(__name__)

	app.config.from_object(config[config_name])
	config[config_name].init_app()

	db.init_app(app)

	return app
