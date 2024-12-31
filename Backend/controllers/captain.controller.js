const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
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
module.exports.loginCaptain = async (req, res, next) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

   
    const isMatch = await captain.comparePasswords(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

   
    const token = captain.generateAuthToken();

    res
      .cookie('token', token)
      .status(200)
      .json({ message: 'Login successful', token });
  } catch (error) {
   
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports.getCaptainProfile=async(req,res,next)=>{
  res.status(200).json({captain:req.captain})
}

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; // Fixed the typo here
  await blacklistTokenModel.create({ token });
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successfully' });
};

