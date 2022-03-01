from bs4 import BeautifulSoup
import requests
from zmq import Again

LINK = "https://www.mobibikes.ca/en/system-data"
PAGE_FILE = "./data/mobibikes_data.html"
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

def main():
    if RE_DOWNLOAD:
        with open(PAGE_FILE, "w") as f:
            page = requests.get(LINK, verify=False)
            f.write(page.text)

    with open(PAGE_FILE, 'r') as f:
        page = f.read()

    drive_paths = get_drive_paths(page)

    print(drive_paths)
    
    return

if __name__ == "__main__":
    main()
