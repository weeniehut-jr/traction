from flask import (
    Blueprint, render_template, request
)

bp = Blueprint('cleanmyboard', __name__, url_prefix='/cleanmyboard')