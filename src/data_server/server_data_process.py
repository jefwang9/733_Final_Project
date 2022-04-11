import os
import pandas as pd
from pathlib import Path
import json

path = os.getcwd()
p = Path(path).parents[1]
directory_path = os.path.abspath(p) + "\\data"
file_path = directory_path.replace("\\", "/")


def get_year_files(year, month):
    if len(month) == 1 and month != "0":
        month = "0" + month
    filename = file_path + "/headmap_monthly/" + str(year) + "-" + month + '.json'
    print(filename)
    f = open(filename)
    data = json.load(f)
    # print(data)
    return data


class ProcessTopRoutes:
    def __init__(self, top_n):
        self.top_n = top_n
        self.df = self.__init_dataset()
        self.__init_geo_data()
        return
    
    def get_popular_routes(self, year: int, month: int):
        # Sanity check
        assert year >= 2017 and year <= 2021
        assert month >= 1 and month <= 12
        
        df = self.df[(self.df["DepartureMonth"] == month) & (self.df["ReturnMonth"] == month)]
        df = df[(df["DepartureYear"] == year) & (df["ReturnYear"] == year)]
        
        df.drop(columns=["DepartureMonth", "ReturnMonth", "DepartureYear", "ReturnYear"], inplace=True)
        df = self.__merge_geo_data(df)
        
        df = df.groupby(["Departure station", "Return station", "Return lat", "Return long", "Departure lat", "Departure long"])\
               .size()\
               .reset_index(name="Count")
        df = df.sort_values(by="Count", ascending=False).set_index("Count")
        df = df.head(self.top_n)
        # return df.to_dict()
        return df.to_json(orient='records')

    
    def __init_geo_data(self):
        tmp = pd.read_csv(f"{p}/data/geocodings.csv")[["address", "lat", "long"]]
        
        # Duplicate this isn't expensive but convenient
        self.return_geo = tmp.rename(columns={"address": "Return station",
                                               "lat": "Return lat",
                                               "long": "Return long"})
        self.depart_geo = tmp.rename(columns={"address": "Departure station",
                                              "lat": "Departure lat",
                                              "long": "Departure long"})
        return
    
    def __merge_geo_data(self, df):
        tmp_df = pd.merge(df, self.return_geo, on="Return station", how="inner")
        res_df = pd.merge(tmp_df, self.depart_geo, on="Departure station", how="inner")
        
        return res_df.dropna()
        
    def __init_dataset(self):
        dfs = []
        for y in range(2017, 2022):
            tmp_df = pd.read_csv(f"{p}/data/Mobi_System_data_{y}.csv", compression='zip')
            dfs.append(self.__get_useful_columns(tmp_df))
        
        df = pd.concat(dfs)
        df["Departure"] = pd.to_datetime(df["Departure"], errors="coerce")
        df["Return"] = pd.to_datetime(df["Return"], errors="coerce")
        df.dropna(inplace=True)

        df["DepartureYear"] = df["Departure"].dt.year
        df["DepartureMonth"] = df["Departure"].dt.month
        df["ReturnYear"] = df["Return"].dt.year
        df["ReturnMonth"] = df["Return"].dt.month
        df.drop(columns=["Departure", "Return"], inplace=True)
        
        return df
    
    def __get_useful_columns(self, df):
        new_df = df[["Departure", "Return", "Departure station", "Return station"]]
        return new_df
