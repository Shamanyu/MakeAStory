# -*- coding: utf-8 -*-
"""
    story_teller.roles
    ~~~~~~~~~~~~~~~~~

    story_teller roles package
"""

from ..core import Service
from .model import Role

class RolesService(Service):
	__model__ = Role

    def __init__(self, *args, **kwargs):
        super(RolesService, self).__init__(*args, **kwargs)


    def _preprocess_params(self, kwargs):
        kwargs = super(RolesService, self)._preprocess_params(kwargs)
        return kwargs
