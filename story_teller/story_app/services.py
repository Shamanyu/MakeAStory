# -*- coding: utf-8 -*-
"""
    story_teller.services
    ~~~~~~~~~~~~~~~~~

    services module
"""

from .users import UsersService
from .roles import RolesService
from .stories import StoriesService
from .sentences import SentencesService

#: An instance of the :class:`UsersService` class
users = UsersService()

#: An instance of the :class:`RolesService` class
roles = RolesService()

#: An instance of the :class:`StoriesService` class
stories = StoriesService()

#: An instance of the :class:`SentencesService` class
sentences = SentencesService()
