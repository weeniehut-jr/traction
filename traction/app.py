from flask import Flask
from .trello import clean_my_board

import os

def create_app(config=None, instance_path=None):
    app = Flask(__name__, instance_path=instance_path, instance_relative_config=True)

    if not os.path.exists(app.instance_path):
        os.makedirs(app.instance_path)


    app.register_blueprint(clean_my_board.bp)

    
    return app