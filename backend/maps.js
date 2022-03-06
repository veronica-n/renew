

const Client = require('@googlemaps/google-maps-services-js');
const client = new Client.Client({})

// get current lat, lng from frontend
// returns coordinates of health care centres within 20 km
async function  mapHealth(curLat, curLng){
    const params = {
    location: { lat: curLat, lng: curLng },
    radius: 20000,
    key: process.env.GOOGLE_MAPS_API_KEY,
    type: ['hospital', 'health', 'clinic']
    };
    var r = await client.placesNearby({ params: params });
    var locations = r.data.results;
    var coordinates =[];

    // address to coordinate conversion
    for (let i = 0; i < locations.length; i++){
        const address = locations[i].vicinity;
        const params_new = {
            address:  address,
            key: process.env.GOOGLE_MAPS_API_KEY
        };
        const r = await client.geocode({params: params_new});
        const coordinate = r.data.results[0].geometry.location;
        coordinates.push(coordinate);
    }
    return JSON.stringify(coordinates);
}

// get current lat, lng from frontend
// returns coordinates of local foodbanks within 20 km
async function  mapFoodbank(curLat, curLng){
    const params = {
    location: { lat: curLat, lng: curLng },
    radius: 20000,
    key: process.env.GOOGLE_MAPS_API_KEY,
    name: ['foodbank']
    };
    var r = await client.placesNearby({ params: params });
    var locations = r.data.results;
    var coordinates =[];

    // address to coordinate conversion
    for (let i = 0; i < locations.length; i++){
        const address = locations[i].vicinity;
        const params_new = {
            address:  address,
            key: process.env.GOOGLE_MAPS_API_KEY
        };
        const r = await client.geocode({params: params_new});
        const coordinate = r.data.results[0].geometry.location;
        coordinates.push(coordinate);
    }
    return JSON.stringify(coordinates);
}

// get current lat, lng from frontend
// returns coordinates of local foodbanks within 20 km
async function mapSketchy(curLat, curLng){
    const params = {
        location: { lat: curLat, lng: curLng },
        radius: 20000,
        key: process.env.GOOGLE_MAPS_API_KEY,
        name: ['homeless']
        };
        var r = await client.placesNearby({ params: params });
        var locations = r.data.results;
        var coordinates =[];
    
        // address to coordinate conversion
        for (let i = 0; i < locations.length; i++){
            const address = locations[i].vicinity;
            const params_new = {
                address:  address,
                key: process.env.GOOGLE_MAPS_API_KEY
            };
            const r = await client.geocode({params: params_new});
            const coordinate = r.data.results[0].geometry.location;
            coordinates.push(coordinate);
        }
        return JSON.stringify(coordinates);
}