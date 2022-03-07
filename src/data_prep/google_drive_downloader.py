import requests
import re

# Whether to print out log
VERBOSE = False

class Downloader:
    def __init__(self):
        self.template = "https://docs.google.com/uc?export=download"
        self.search_re = re.compile("filename=\"(.*)\"")
        self.chunk_size = 32768

        self.session = requests.Session()
        
        return

    def download(self, id, folder, month=None):
        if VERBOSE:
            print(f"Accessing {id}......")

        response = self.session.get(self.template, params={'id': id}, stream=True)
        header = response.headers["Content-Disposition"]

        original_file_name = re.search(self.search_re, header).group(1) # the file name on google drive
        extension = original_file_name.split('.')[1]

        # If month is passed, use folder/month/extension
        # Otherwise use folder/original_name
        if month:
            new_file_name = folder + month + '.' + extension
        else:
            new_file_name = folder + original_file_name

        self.save(new_file_name, response)

        if VERBOSE:
            print(f"Downloaded {original_file_name}.")
        
        return

    def save(self, file_name, response):
        with open(file_name, 'wb') as f:
            for c in response.iter_content(self.chunk_size):
                if c:
                    f.write(c)

        return
