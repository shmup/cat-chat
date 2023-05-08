from flask import Blueprint


user_blueprint = Blueprint('user', __name__)


@user_blueprint.route('/api/users')
def user_list():
    return 'hello world'
