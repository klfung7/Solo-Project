const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv').config()
const mongo = process.env.MONGO;
mongoose.connect(mongo);

const GuestSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  RSVP: { type: String, required: true }
});

module.exports = mongoose.model('Guest', GuestSchema);