const axios = require('axios');

const accessKey = process.env.POSITIONSTACK_API; // Ensure your API key is stored in .env

// Forward Geocoding (Address to Coordinates)
module.exports.getCoordinatesFromAddress = async (address) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=${accessKey}&query=${encodeURIComponent(address)}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.data && data.data.length > 0) {
            const location = data.data[0];
            return {
                latitude: location.latitude,
                longitude: location.longitude,
                label: location.label,
            };
        } else {
            throw new Error('No results found for the given address.');
        }
    } catch (error) {
        // Enhanced error logging
        if (error.response) {
            console.error('Error Response:', error.response.data);
        } else {
            console.error('Error Message:', error.message);
        }

        throw new Error('Failed to fetch geolocation data. Please check your API key or address.');
    }
};
