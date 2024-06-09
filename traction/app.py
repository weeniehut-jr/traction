from flask import Flask
import os

def create_app(config=None, instance_path=None):
    app = Flask(__name__, instance_path=instance_path, instance_relative_config=True)

    if not os.path.exists(app.instance_path):
        os.makedirs(app.instance_path)
    
    return app