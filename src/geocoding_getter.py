from config import GEOCODING_API_KEY
import googlemaps


class InvalidResponse(Exception):
    pass


def geocoder(address):
    gmaps = googlemaps.Client(key=GEOCODING_API_KEY)
    geocode_result = gmaps.geocode(address)

    if not geocode_result:
        raise InvalidResponse
    geocode_result = geocode_result[0]

    postal_code = None
    lat, long = None, None

    try:
        address_components = geocode_result["address_components"]
        for c in address_components:
            if "types" in c and len(c["types"]) > 0 and c["types"][0] == "postal_code":
                postal_code = c["long_name"].replace(' ', '')

        location_components = geocode_result["geometry"]["location"]
        lat = location_components["lat"]
        long = location_components["lng"]
    except:
        raise InvalidResponse

    if postal_code is None or lat is None or long is None:
        raise InvalidResponse

    return {"postal_code": postal_code, "lat": lat, "long": long}
