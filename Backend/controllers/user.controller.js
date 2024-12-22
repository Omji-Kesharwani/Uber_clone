const userModel = require('../models/user.model');
const { validationResult } = require('express-validator');
const userService = require('../services/user.service');

module.exports.registerUser = async (req, res, next) => {

    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

  
    if (!fullname || typeof fullname !== 'object' || !fullname.firstname ) {
      return res.status(400).json({ error: "Fullname with firstname is required." });
    }

    // Hash the password
    const hashPassword = await userModel.hashPassword(password);

    // Create the user
    const user = await userService.createUser(
      fullname.firstname,
      fullname.lastname,
      email,
      hashPassword
    );

    // Generate token and respond
    const token = user.generateAuthToken();
    res.status(201).json({ token, user });

};

module.exports.loginUser = async (req, res, next) => {
  try {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure email and password from request body
    const { email, password } = req.body;

    // Find user with email and include the password field
    const user = await userModel.findOne({ email }).select('+password');

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await user.comparePasswords(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate an auth token
    const token = user.generateAuthToken();

    // Respond with token and user
    res.status(200).json({ token, user });
  } catch (error) {
    console.error('Error logging in user:', error.message);
    next(error); // Pass error to error-handling middleware
  }
};
