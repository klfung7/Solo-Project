// entry file for backend 
const express = require("express");
// const { experiments } = require("webpack");
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();
const rsvpController = require('./rsvpController'); 
// const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config()
const mongo = process.env.MONGO;


mongoose.connect(mongo);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


// create new guest entry
app.post('/api/create/:firstName/:lastName', rsvpController.createGuest, (req, res) => {
  return res.status(200).json(res.locals.guest);
});

// update rsvp
app.patch('/api/find/:firstName/:lastName/:rsvp', rsvpController.RSVPGuest, (req, res) => {
  return res.status(200);
})

// get all guests info
app.get('/api/list', rsvpController.getAllUsers, (req, res) => {
  return res.status(200).json(res.locals.guests);
})

app.get('/api/*', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});