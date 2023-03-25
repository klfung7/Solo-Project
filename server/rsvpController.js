// set up info here for getting all users, finding a specific user, updating rsvp
const GuestDB = require('./GuestModel');

const RSVPController = {};

RSVPController.getAllUsers = async (req, res, next) => {
  try {
    const guestList = await GuestDB.find({}, { firstName: 1, lastName: 1, RSVP: 1, _id: 0 });
    res.locals.guests = guestList;
    return next();
  }
  catch (err) {
    return next({
      log: 'RSVPController.getAllUsers error',
      status: 400,
      message: { err: 'Error occurred in RSVPController.getAllUsers' }
    });
  }
};

RSVPController.createGuest = async (req, res, next) => {
  const { firstName, lastName } = req.params;
  try {
    const guest = await GuestDB.create({ firstName: firstName, lastName: lastName, RSVP: 'null' })
    console.log('Successfully added guest', guest);
    return next();
  }
  catch(err) {
    return next({
      log: 'RSVPController.createGuest error',
      status: 400,
      message: { err: 'Error occurred in RSVPController.createGuest' }
    });
  }
}

// findoneandupdate
// pull guest off req.body, then update params 

RSVPController.RSVPGuest = async (req, res, next) => {
  console.log('rsvp guest controller')
  const { firstName, lastName, rsvp } = req.params;
  console.log('RSVPController.RSVPGuest', firstName, lastName, rsvp)
  try {
    console.log('Searching database')
    const guest = await GuestDB.findOneAndUpdate({ firstName: firstName, lastName: lastName }, { RSVP: rsvp }, { new: true });
    if (!guest){
      console.log('Guest not found. Please try again');
    } else {
      console.log(`Successfully updated guest', ${firstName} ${lastName}  with rsvp ${rsvp}`);
      // objects - guest looking for {guest}, inside parameters - key/value to update
    }
    return next();
  }
  catch(err) {
    return next({
      log: 'RSVPController.RSVPGuest error',
      status: 400,
      message: { err: 'Error occurred in RSVPController.RSVPGuest' }
    });
  }
}

module.exports = RSVPController;