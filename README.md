# 733 Final Project

Welcome to group CWJY's term project repository!

## How to run

### Data pipeline and data as a service

We have built data pipelines in folder ```src/data_prep/``` and stored all the relevant transformed datasets in CSV format in the ```data/``` directory. While we will dive deep into our decision of not using a database in our report, this makes running the data pipeline a one-time process. Please take a look at the file structure below if you're more interested in running the pipeline yourself.

The Flask data server needs to be running in order for the front-end to gather data, though. Please simply verify that you have all the dependencies listed in the later section, and call ```python3 src/data_server/server.py &```. The server will initially prime and load some datasets it uses, and then run quietly in background. 

### Front-end host
TODO

### Machine learning models
TODO

## File structure

Some temporary files and folders are omitted for they are not relevant in understanding this repository.

    ├── data/ # data storage folder in CSV format
    │ ├── raw_mobibikes_data/ # Monthly raw data of rental records
    │ ├── raw/ # The 4 raw, supplementary datasets
    │ ├── processed/ # Transformed 4 supplementary datasets
    │ ├── geocodings.csv # Geometric coordinates for all mobibikes rental stations
    │ ├── Mobi_System_Data_2017.csv # Transformed rental records
    │ ├── . . . 
    │ ├── Mobi_System_Data_2021.csv
    │ ├── not_found_stations.txt # small number of stations not found during geocoding
    │ └── TODO
    │
    ├── src/ # all source files reside here
    │ ├── data_prep/ # subtroutines in the data ETL pipeline
    │ │ ├── mobi_crawler.py
    │ │ ├── google_drive_downloader.py
    │ │ ├── data_merger.ipynb
    │ │ ├── geocoding_getter.py 
    │ │ ├── data_cleaning.py
    │ │ ├── TODO 
    │ │ └── ... 
    │ │
    │ ├── map_visual/
    │ │ ├── main.html # Webpage
    │ │ ├── script.js # Webpage script
    │ │ ├── style.css # Styling
    │ │ └── web_display_dataProcess.ipynb # Data processing for heatmap
    │ │
    │ ├── data_server/ # hosts the flask data server and the data processing componenets it needs
    │ │ ├── data_processor.py # correlates the supplementary datasets to the bike stations
    │ │ ├── server_data_process.py
    │ │ ├── server.py # Flask server
    │ │ └── ... 
    │ │
    │ ├── kmeans.ipynb
    │ └── model.ipynb
    │
    └── README.md # this file you're reading :)


## Dependencies

### Data pipeline and data server

- Beautiful Soup
- Flask
- Google Maps (```googlemaps```)
- Numpy
- Pandas
- pyproj.Geod # for transforming geometric coordinates to distance

### Front-end host
TODO

### Back-end machine learning models
TODO