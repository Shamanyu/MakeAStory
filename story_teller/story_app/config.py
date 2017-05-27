

import os

basedir = os.path.abspath(os.path.dirname(__file__))



class Config:
	SECRET_KEY = 'babadook is a good person'
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	SQLALCHEMY_COMMIT_ON_TEARDOWN = True


	@staticmethod
	def init_app():
		pass


class DevelopmentConfig(Config):
	DEBUG = True
	DATABASE_NAME = 'story_teller'
	SQLALCHEMY_DATABASE_URI = "postgresql://hashy:bambi@localhost:5432/%s" % DATABASE_NAME


config = {
	'development': DevelopmentConfig
}