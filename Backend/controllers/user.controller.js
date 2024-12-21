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
