// call GoogleMaps API
import {Client} from "@googlemaps/google-maps-services-js";

// testfunc();

function testfunc(){
    const client = new Client({})
    const params = {
    location: { lat: 49.28, lng: -123.12 },
    radius: 50000,
    key: process.env.GOOGLE_MAPS_API_KEY,
    type: ['hospital', 'health', 'clinic'],
    }
    try {
    const r = await client.placesNearby({ params: params })
    console.log(r.data.results)
    } catch (e) {
        console.log(e.response.data.error_message);
    }
}

// crime filter

// health care filter

// food bank filter
