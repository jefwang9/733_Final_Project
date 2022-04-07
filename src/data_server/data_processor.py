import sys
import pandas as pd

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
        argv[1]: latitude of location to query
        argv[2]: longitude of location to query
        argv[3]: radius to query (TODO: unit?)
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