from bs4 import BeautifulSoup
import requests

LINK = "https://www.mobibikes.ca/en/system-data"
DATA_FOLDER = "data/"
PAGE_FILE = DATA_FOLDER + "mobibikes_data.html"
RE_DOWNLOAD = False # Controls whether get new webpages or load from data 

def get_drive_paths(page):
    res = []

    soup = BeautifulSoup(page, features="html.parser")

    for a_tag in soup.find_all('a', href=True):
        if "drive.google" in a_tag["href"]:
            # print(a_tag.get("href"))
            # print(a_tag.text)

            res.append((a_tag.text, a_tag.get("href")))

    return res[2:] # The first 2 are all of 2017 data files, skipping


def download_from_drive(paths):
    for month, url in paths:
        id = url.split(r'/')[5]

        month = month.lower().replace(' ', '_') # e.g. March 2017 becomes march_2017
        output_file = DATA_FOLDER + month + ".csv"

        # TODO

        id = '0BwwA4oUTeiV1UVNwOHItT0xfa2M'
        request = drive_service.files().get_media(fileId=id)
        fh = io.BytesIO()
        downloader = MediaIoBaseDownload(fh, request)
        done = False
        while done is False:
            status, done = downloader.next_chunk()
            print ("Download %d%%." % int(status.progress() * 100))

def main():
    if RE_DOWNLOAD:
        with open(PAGE_FILE, "w") as f:
            page = requests.get(LINK, verify=False)
            f.write(page.text)

    with open(PAGE_FILE, 'r') as f:
        page = f.read()

    drive_paths = get_drive_paths(page)
    download_from_drive(drive_paths)
    
    return

if __name__ == "__main__":
    main()
