import datetime
from story_app import db


class Role(db.Model):
    __tablename__ = "roles"

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    role_name = db.Column(db.String(256), unique=True)
    update_time = db.Column(db.DateTime, default=datetime.datetime.utcnow,                                              
        onupdate=datetime.datetime.utcnow)
    create_time = db.Column(db.DateTime, default=datetime.datetime.utcnow)
