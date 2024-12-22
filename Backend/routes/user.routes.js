const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

const authMiddleware = require('../middlewares/auth.middlleware');

router.post('/register',[
  body('fullname.firstname').isLength({min:3}).withMessage('Fullname must be at least 3 characters long'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],(req,res)=>{
   userController.registerUser(req,res);
})


router.post('/login',[
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],(req,res)=>{
   userController.loginUser(req,res);
})

router.get('/profile', authMiddleware.authUser,
  userController.getProfileData
)

router.get('/logout',authMiddleware.authUser,userController.logoutUser)



module.exports = router;