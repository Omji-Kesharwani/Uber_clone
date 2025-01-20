const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./db/db');
const cookieParser = require('cookie-parser')

const mapsRoutes=require('./routes/maps.routes');
app.use(cors({
  origin:"http://localhost:5173"
}));
const userRoutes = require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes')
connect();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps',mapsRoutes)


module.exports = app;