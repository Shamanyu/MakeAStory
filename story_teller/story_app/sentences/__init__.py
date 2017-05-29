# -*- coding: utf-8 -*-
"""
    story_teller.sentences
    ~~~~~~~~~~~~~~~~~

    story_teller sentences package
"""

from .core import Service
from .models import Sentence

class SentencesService(Service):
	__model__ = Sentence