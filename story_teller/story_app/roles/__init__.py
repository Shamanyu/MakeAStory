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