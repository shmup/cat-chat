import logging as log
from flask import Flask
from flask_cors import CORS
from routes import user_blueprint
log.basicConfig(level=log.INFO)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Routes
app.register_blueprint(user_blueprint)
