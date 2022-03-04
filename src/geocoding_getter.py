from config import GEOCODING_API_KEY
import googlemaps


DEBUG = False


class InvalidResponse(Exception):
    pass


def geocoder(address):
    gmaps = googlemaps.Client(key=GEOCODING_API_KEY)

    postal_code = None
    lat, long = None, None

    if DEBUG:
        print("Looking up ... \n" + address)

    lookup_res = gmaps.places_autocomplete(input_text=address, components={"country": ["CA"]})
    if not lookup_res:
        raise InvalidResponse
    elif DEBUG:
        print(lookup_res)
        print("\n------------------------------------\n")

    place_id = lookup_res[0]["place_id"]
    place_res = gmaps.place(place_id=place_id)

    if DEBUG:
        print(place_res + "\n")

    address_components = place_res["result"]["address_components"]
    for c in address_components:
        if "postal_code" in c["types"]:
            postal_code = c["long_name"].replace(' ', '')

    location = place_res["result"]["geometry"]["location"]
    lat = location["lat"]
    long = location["lng"]

    return postal_code, lat, long
