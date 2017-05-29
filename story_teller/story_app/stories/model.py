import datetime
from story_app import db


class Story(db.Model):
    __tablename__ = "stories"

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    create_time = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    update_time = db.Column(db.DateTime, default=datetime.datetime.utcnow,                                              
                            onupdate=datetime.datetime.utcnow)
    expired = db.Column(db.Boolean(), default=False)


class StoryUserAssociation(db.Model):
    __tablename__ = "story_user_association"

    story_id = db.Column(db.Integer(), db.ForeignKey("stories.id"), primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"), primary_key=True)
    permission = db.Column(db.String(32))
