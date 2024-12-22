const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator'); // Fixed typo: validateResult -> validationResult

module.exports.registerCaptain = async (req, res, next) => {
  try {
    // Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure and validate inputs
    const { fullname = {}, email, password, vehicle = {} } = req.body;

    if (!fullname.firstname || !fullname.lastname) {
      return res.status(400).json({ message: "Fullname must include firstname and lastname" });
    }

    if (!vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicleType) {
      return res.status(400).json({ message: "Vehicle details are incomplete" });
    }

    // Hash the password
    const hashedPassword = await captainModel.hashPassword(password);

    // Check if captain already exists
    const isCaptainAlreadyExists = await captainModel.findOne({ email });
    if (isCaptainAlreadyExists) {
      return res.status(400).json({ message: "Captain Already exists !!" });
    }

    // Create the captain
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    // Generate an auth token
    const token = captain.generateAuthToken();

    // Send response
    res.status(201).json({ token, captain });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};
