
from flask import Flask, send_from_directory, abort
import os

app = Flask(__name__, static_folder='static')

@app.route('/')
def home():
    return send_from_directory('static', 'index.html')

@app.route('/promocoes')
def promocoes():
    return send_from_directory('static', 'promocoes.html')

@app.route('/fluentmethod')
def fluent_method():
    return send_from_directory('static', 'fluentmethod.html')

@app.route('/<path:filename>')
def serve_file(filename):
    norm = os.path.normpath(filename)
    if norm.startswith('..'):
        abort(404)
    return send_from_directory('static', norm)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
