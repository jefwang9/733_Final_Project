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
        self.__init_dataset()
        return
    
    def get_popular_routes(self, year: int, month: int):
        # Sanity check
        assert year >= 2017 and year <= 2021
        assert month >= 1 and month <= 12
        
        df = self.df[(self.df["DepartureMonth"] == month) & (self.df["ReturnMonth"] == month)]
        df = df[(df["DepartureYear"] == year) & (df["ReturnYear"] == year)]
        
        df = df.groupby(["Departure station", "Return station"]).size().reset_index(name="Count")
        df = df.sort_values(by="Count", ascending=False).set_index("Count")
        df = df.head(self.top_n)
        return df.to_dict()
        
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
        
        self.df = df
    
    def __get_useful_columns(self, df):
        new_df = df[["Departure", "Return", "Departure station", "Return station"]]
        return new_df
