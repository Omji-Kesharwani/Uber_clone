const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel=require('../models/captain.model')

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token ||  req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized access. Token is missing." });
  }
  const isBlacklisted =await blacklistTokenModel.findOne({
    token:token
  })

  if(isBlacklisted)
  {
    return res.status(401).json({message:'Unauthorized'})
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

  
    if (!user) {
      return res.status(401).json({ error: "Unauthorized access. User not found." });
    }

   
    req.user = user;
    return next();
  } catch (error) {
    console.error('Error authorizing user:', error.message);

  
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: "Unauthorized access. Token has expired." });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: "Unauthorized access. Invalid token." });
    }

   
    return res.status(500).json({ error: "An error occurred during authentication." });
  }
};

module.exports.authCaptain=async(req,res,next)=>{
  const token = req.cookies.token ||  req.headers.authorization?.split(' ')[1];

    if(!token)
    {
      return res.status(401).json({error:'Unauthorized'})
    }

    const isBlacklisted=await blacklistTokenModel.findOne({token});

    if(isBlacklisted)
    {
      return res.status(401).json({
        message:'Unauthorized'
      })
    }

   try {
     const decoded = jwt.verify(token, process.env.JWT_SECRET);

     const captain=await captainModel.findById(decoded._id);

     if(!captain)
     {
      return res.status(401).json({ error: "Unauthorized access. Captain not found." });
     }
     req.captain=captain;
     return next();
}
catch(error)
{
  console.log("Error",error);
}
}