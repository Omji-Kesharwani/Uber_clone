const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./db/db');
app.use(cors());
const userRoutes = require('./routes/user.routes');
connect();
app.get('/', (req, res) => {
  res.send('Hello World');
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);


module.exports = app;