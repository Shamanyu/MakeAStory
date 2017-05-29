# -*- coding: utf-8 -*-
"""
    story_teller.users
    ~~~~~~~~~~~~~~~~~

    story_teller users package
"""

from ..core import Service
from .model import User

class UsersService(Service):
	__model__ = User