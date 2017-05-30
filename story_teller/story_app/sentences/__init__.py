# -*- coding: utf-8 -*-
"""
    story_teller.sentences
    ~~~~~~~~~~~~~~~~~

    story_teller sentences package
"""

from ..core import Service
from .model import Sentence

class SentencesService(Service):
	__model__ = Sentence

    def __init__(self, *args, **kwargs):
        super(SentencesService, self).__init__(*args, **kwargs)


    def _preprocess_params(self, kwargs):
        kwargs = super(SentencesService, self)._preprocess_params(kwargs)
        return kwargs

    def get_story(self, id):
        """
        Return sentence objs for given story in order of sentence number
        """
        return self.__model__.query.filter_by(**kwargs).order_by(Sentence.sentence_number).all()
