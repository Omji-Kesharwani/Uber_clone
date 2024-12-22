const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
    throw new Error('All fields are required');
  }

  try {
    const captain = await captainModel.create({
      fullname: {
        firstname,
        lastname: lastname || null, 
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    });

    return captain;
  } catch (error) {
    // Handle database or validation errors
    throw new Error(`Error creating captain: ${error.message}`);
  }
};
