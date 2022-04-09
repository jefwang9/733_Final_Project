from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
    response = jsonify({'year': 11, "month": 11})
    return response

# @app.route("/api", methods = ['POST'])
# def getdatabydate():
#     year = request.form.get('year') 
#     print(year)
#     response = jsonify({'year': 11})
#     return response


@app.route("/api", methods = ['GET'])
def getdatabydate2():
    year = request.args.get('year') 
    print(year)
    response = jsonify({'year': year})
    return response


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)