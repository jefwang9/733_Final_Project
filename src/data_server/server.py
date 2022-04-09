from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import server_data_process as sdp

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


# @app.route("/api", methods = ['GET'])
# def getdatabydate2():
#     year = request.args.get('year') 
#     print(year)
#     # response = jsonify({'year': year})
#     response = sdp.get_year_files(2018, 11)
#     return response


# /api/heatmapmonthly?year=2021&month=2
@app.route("/api/heatmapmonthly", methods = ['GET'])
def getheatmapData():
    year = request.args.get('year') 
    month = request.args.get('month') 
    print(year)
    print(month)
    response = sdp.get_year_files(year, month)
    return response



if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)