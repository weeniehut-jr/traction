from flask import (
    Blueprint, render_template, request
)
import json

bp = Blueprint('cleanmyboard', __name__, url_prefix='/cleanmyboard')

@bp.route('/connector', methods=['HEAD'])
def trelloConnectorHead():
    return None, 200, None

@bp.route('/connector', methods=['POST'])
def trelloConnector():
    #TODO
    return render_template('trello/clean_my_board/index.html')