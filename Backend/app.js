const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./db/db');
const cookieParser = require('cookie-parser')
app.use(cors());
const userRoutes = require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes')
connect();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World');
})
app.use('/users', userRoutes);
app.use('/captains',captainRoutes)


module.exports = app;