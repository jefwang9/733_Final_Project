from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import server_data_process as sdp

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

CORS(app)

print("Initializing top n routes . . .")
print("Slow, please wait . . .")
TOP_N_ROUTES = 10
p = sdp.ProcessTopRoutes(TOP_N_ROUTES)
print("Server started!")


@app.route("/")
def helloWorld():
    """
    Sanity check that the server is running
    """
    response = jsonify({'hello': 0, "world": 1})
    return response


@app.route("/api/popular_routes", methods = ['GET'])
def getdatabydate():
    """
    /api/popular_routes?year=YEAR&month=MONTH
    """
    year = int(request.args.get('year'))
    month = int(request.args.get('month'))
    # response = jsonify(p.get_popular_routes(year, month))
    response = p.get_popular_routes(year, month)
    return response


# /api/heatmapmonthly?year=2021&month=2
@app.route("/api/heatmapmonthly", methods = ['GET'])
def getheatmapData():
    year = request.args.get('year') 
    month = request.args.get('month') 
    # print(year)
    # print(month)
    response = sdp.get_year_files(year, month)
    return response


# /api/demandForecast?time=Morning
@app.route("/api/demandForecast", methods = ['GET'])
def getdemandForecast():
    timeframe = str(request.args.get('time')).lower()
    print("working")
    # df = sdp.get_forecast_db()
    print(timeframe)

    response = sdp.get_demand_forecast(timeframe)
    return response

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
