import datetime
from story_app import db


class Sentence(db.Model):
    __tablename__ = "sentences"

    story_id = db.Column(db.Integer(), primary_key=True, db.ForeignKey("stories.id"))
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"))
    sentence_number = db.Column(db.Integer(), primary_key=True)
    data = db.Column(db.Text(), nullable=False)
    create_time = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    update_time = db.Column(db.DateTime, default=datetime.datetime.utcnow,
                            onupdate=datetime.datetime.utcnow)
