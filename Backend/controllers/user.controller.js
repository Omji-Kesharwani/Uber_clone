const userModel = require('../models/user.model');
const { validationResult } = require('express-validator');
const userService = require('../services/user.service');
const blacklistTokenModel=require('../models/blacklistToken.model')

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
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  
    const { email, password } = req.body;

   
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    
    const isMatch = await user.comparePasswords(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

   
    const token = user.generateAuthToken();

    res.cookie('token',token);

  
    res.status(200).json({ token, user });
  } catch (error) {
    console.error('Error logging in user:', error.message);
    next(error); // Pass error to error-handling middleware
  }
};


module.exports.getProfileData = async (req, res, next) => {
try{
res.status(200).json(req.user);
}
catch(error){
console.error('Error getting profile data:', error.message);
}
}

module.exports.logoutUser=async(req,res,next)=>{
 res.clearCookie("token");
 const token=req.cookies.token|| req.headers.authorization.split(' ')[1];
 await blacklistTokenModel.create({token});
 res.status(200).json({message:'Logged out Successfully'})
}