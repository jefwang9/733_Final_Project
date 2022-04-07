import sys
import pandas as pd
from pyproj import Geod

"""
TODO
[x] We need to get distance between two coordinates (for bike_ways, to get the total distance within the bounding box in meters)
[x] We need to get the bounding box around coordinates given a distance

"""

def get_bounding_box(long, lat, distance):
    """
    Distance is in meters
    """
    g = Geod(ellps='WGS84')
    fwd_long, fwd_lat, _  = g.fwd([long]*4, [lat]*4, [0, 90, 180, 270], [distance]*4)
    
    # return values: max_long, min_long, max_lat, min_lat
    return max(fwd_long), min(fwd_long), max(fwd_lat), min(fwd_lat)


def get_distance(long1, lat1, long2, lat2):
    """
    Returns distance in meters
    """
    g = Geod(ellps='WGS84')
    return g.inv(long1, lat1, long2, lat2)[2]


def get_population(postal_code):
    postal_code = postal_code.upper()[:3] # get geographic code
    
    df = pd.read_csv("../../data/processed/population.csv")
    lookup = df["Geographic code"] == postal_code # linear search
    
    if (lookup.sum() == 0):
        print("Not found")
        return 404
    else:
        population = int(df.loc[lookup]["Population, 2016"])
        print(str(population))
        return population


def main(argv):
    """
    For density queries:
        argv[0]: dataset invoked, e.g. "bike_ways", "parks", "translink_stops"
        argv[1]: longitude of location to query
        argv[2]: latitude of location to query
        argv[3]: radius to query (in meters)
    For population queries:
        argv[0]: specify "population"
        argv[1]: postal code to query
    """
    assert(len(argv) == 4 or len(argv) == 2)
    
    if (len(argv) == 2):
        assert(argv[0] == "population")
        return get_population(argv[1])
    else:
        # Density queries
        if argv[0] == "bike_ways":
            ...
        elif argv[0] == "parks":
            ...
        elif argv[0] == "translink_stops":
            ...
        else:
            raise AssertionError("Invalid query")


if __name__ == "__main__":
    assert(len(sys.argv) > 1)
    main(sys.argv[1:])