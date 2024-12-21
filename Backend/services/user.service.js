const userModel = require('../models/user.model');

module.exports.createUser = async (firstname, lastname, email, password) => {
  try {
  

    // Check required fields
    if (!firstname || !lastname || !email || !password) {
      throw new Error('All fields are required');
    }

    // Create the user
    const user = await userModel.create({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    });

    return user;
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
};
