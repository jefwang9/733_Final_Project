# 733_Final_Project
SFU CMPT733_Final_Project

## File structure

    .
    ├── data
    │ ├── raw_mobibikes_data
    │ │ └── ...
    │ ├── tmp
    │ │ └──
    │ ├── geocodings.csv
    │ ├── Mobi_System_Data_2017.csv
    │ ├── Mobi_System_Data_2018.csv
    │ ├── Mobi_System_Data_2019.csv
    │ ├── Mobi_System_Data_2020.csv
    │ ├── Mobi_System_Data_2021.csv
    │ ├── not_found_stations.txt
    ├── src # Source Files (alternatively `spec` or `tests`)
    │ ├── data_prep #
    │ │ ├──
    │ │ └──
    │ ├── map_visual
    │ │ ├── main.html # Webpage
    │ │ ├── script.js # Webpage script
    │ │ ├── style.css # Styling
    │ │ └── web_display_dataProcess.ipynb # Data processing for heatmap
    │ ├── kmeans.ipynb
    │ └── model.ipynb
    └── README.md


## Dependencies

### Data preparation
- Beautiful Soup
- Google Maps (pip package: ```googlemaps```)
- Numpy
- Pandas
- Built-in packages: pickle, re, requests
