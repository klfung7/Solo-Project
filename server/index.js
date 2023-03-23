// entry file for backend 
const express = require("express");
// const { experiments } = require("webpack");
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();
const rsvpController = require('./rsvpController'); 
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://klfung7:soccer7@cluster0.7a7rvdl.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.json());
app.use(bodyParser.urlencoded());

// create new guest entry
app.post('/create', rsvpController.createGuest, (req, res) => {
  return res.status(200).json(res.locals.guest);
});

app.patch('/find', rsvpController.findGuest, (req, res, next) => {
  console.log(res.locals.found);
  return res.status(200).json(res.locals.found);
})

// find a guest info
// guestRouter.get('/:name', )

app.get('/', (req, res) => {
  res.json({ message: "Hello from server!" });
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});