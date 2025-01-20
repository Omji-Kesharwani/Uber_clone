const axios = require('axios');
require('dotenv').config(); // Load environment variables

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    if (!apiKey) {
        throw new Error('Google Maps API key is not set. Check your .env file.');
    }

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === 'OK') {
            const location = data.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng,
            };
        } else if (data.status === 'ZERO_RESULTS') {
            throw new Error('No results found for the provided address.');
        } else {
            throw new Error(`Google Maps API error: ${data.status}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.response?.data || error.message);
        throw new Error('Failed to fetch the coordinates. Please try again later.');
    }
};
