# -*- coding: utf-8 -*-
"""
    story_teller.stories
    ~~~~~~~~~~~~~~~~~

    story_teller stories package
"""

from .core import Service
from .models import Story

class StoriesService(Service):
	__model__ = Story