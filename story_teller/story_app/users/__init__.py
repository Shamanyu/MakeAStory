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

    def __init__(self, *args, **kwargs):
        super(UsersService, self).__init__(*args, **kwargs)


    def _preprocess_params(self, kwargs):
        kwargs = super(UsersService, self)._preprocess_params(kwargs)
        return kwargs
