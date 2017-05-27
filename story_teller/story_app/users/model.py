import datetime
from story_app import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer(), primary_key=True)
    user_name = db.Column(db.String(512), unique=True)
    first_name = db.Column(db.String(512))
    last_name = db.Column(db.String(512))
    active = db.Column(db.Boolean(), default=True)
    password = db.Column(db.String(512))
    role_id = db.Column(db.Integer(), db.ForeignKey("roles.id"), nullable=True)
    update_time = db.Column(db.DateTime, default=datetime.datetime.utcnow,                                              
                            onupdate=datetime.datetime.utcnow)
    create_time = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    role = db.Relationship("Role")
