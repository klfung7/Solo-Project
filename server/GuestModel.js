const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://klfung7:soccer7@cluster0.7a7rvdl.mongodb.net/?retryWrites=true&w=majority')

const GuestSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  RSVP: { type: String, required: true }
});

module.exports = mongoose.model('Guest', GuestSchema);