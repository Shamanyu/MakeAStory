# -*- coding: utf-8 -*-
"""
    story_teller.api.users
    ~~~~~~~~~~~~~~~~~~~~~

    Users endpoints
"""

from flask import Blueprint
# from flask_login import current_user

from ..services import users, roles
# from . import route

bp = Blueprint('users', __name__, url_prefix='/users')

@route(bp, '/', methods=['GET'])
def get_all():
	"""Returns a list of all user instances"""
	return users.all()

@route(bp, '/', methods=['POST'])
def create():
	"""Create a user"""
	form_data = MultiDict(request.json or {})

    user_name = form_data.get('username', None).encode('ascii','ignore')
    first_name = form_data.get('first_name', None).encode('ascii','ignore')
    last_name = form_data.get('last_name', None).encode('ascii','ignore')
    password = form_data.get('password', None).encode('ascii','ignore')
    role_name = form_data.get('role_name', None).encode('ascii','ignore')

    role = roles.find(role_name=role_name)

    user_json = {
        "id":0,
        "username":username,
        "first_name":first_name,
        "last_name":last_name,
        "password":password,
        "role_id":role.id,
    }

    users.save(user_json)

@route(bp, '/<user_id>', methods=['GET'])
def show(user_id):
    """Returns a user instance."""
    return users.get_or_404(user_id)