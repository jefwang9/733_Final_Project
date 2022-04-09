import os
import sys
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
