# -*- coding: utf-8 -*-
"""
    story_teller.stories
    ~~~~~~~~~~~~~~~~~

    story_teller stories package
"""

from ..core import Service
from .model import Story

class StoriesService(Service):
    __model__ = Story

    def __init__(self, *args, **kwargs):
        super(StoriesService, self).__init__(*args, **kwargs)


    def _preprocess_params(self, kwargs):
        kwargs = super(StoriesService, self)._preprocess_params(kwargs)
        return kwargs


    def get_complete_story(self, id):
        """
        Return list of dict with sentence data and username for given story
        """
        from story_app.services import sentences, users
        story_obj = self.get(id)
        if not story_obj:
            return []
        sentence_objs = sentences.get_story(id)
        story = []
        for obj in sentence_objs:
            user_id = obj.user_id
            user_obj = users.get(user_id)
            username = user_obj.user_name
            sentence = {"sentence_number": obj.sentence_number,
                        "data": obj.data,
                        "user_name": username
                        }
            story.append(sentence)
        return story
