from bs4 import BeautifulSoup
import requests
from google_drive_downloader import Downloader

LINK = "https://www.mobibikes.ca/en/system-data"
DATA_FOLDER = "data/"

RE_DOWNLOAD = False # Controls whether get new webpages or load from data 
DEBUG = False


def get_drive_paths(page):
    res = []

    soup = BeautifulSoup(page, features="html.parser")

    for a_tag in soup.find_all('a', href=True):
        if "drive.google" in a_tag["href"]:
            if DEBUG:
                print(a_tag.get("href"))
                print(a_tag.text)

            res.append((a_tag.text, a_tag.get("href")))

    return res[1:] # The first 2 are all of 2017 data files, skipping the first one


def download_from_drive(paths, downloader):
    for month, url in paths:
        id = url.split(r'/')[5]

        # month = month.lower().replace(' ', '_') # e.g. March 2017 becomes march_2017
        # output_file = DATA_FOLDER + month + ".csv"

        raw_table_path = DATA_FOLDER + "raw_mobibikes_data/"
        downloader.download(id, raw_table_path)
    
    return

def main():
    page_file = DATA_FOLDER + "mobibikes_data.html"

    if RE_DOWNLOAD:
        with open(page_file, "w") as f:
            page = requests.get(LINK, verify=False)
            f.write(page.text)

    with open(page_file, 'r') as f:
        page = f.read()

    drive_paths = get_drive_paths(page)

    downloader = Downloader()
    download_from_drive(drive_paths, downloader)
    
    return


if __name__ == "__main__":
    main()
