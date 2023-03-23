// set up info here for getting all users, finding a specific user, updating rsvp
const GuestDB = require('./GuestModel');

const RSVPController = {};

RSVPController.getAllUsers = (req, res, next) => {
  GuestDB.find({}, (err, guests) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    
    // store retrieved users into res.locals and move on to next middleware
    res.locals.guests = guests;
    return next();
  });
};

RSVPController.createGuest = (req, res, next) => {
  console.log('inside createGuest');
  console.log('req.body', req.body);
  const { firstName, lastName, RSVP } = req.body;
  console.log(firstName, lastName, RSVP);
  try {
    GuestDB.create({ firstName: firstName, lastName: lastName, RSVP: RSVP }) // TODO IMPLEMENT THIS
    console.log('Successfully added guest');
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

RSVPController.updateGuest = (req, res, next) => {

}

RSVPController.findGuest = async (req, res, next) => {
  const { firstName, lastName } = req.body;
  // console.log(req.body)
  // console.log(firstName, lastName);
  try {
    console.log('Searching database')
    const guest = await GuestDB.findOne({ firstName: firstName, lastName: lastName });
    if (guest){
      RSVPController.updateGuest
      // res.locals.found = { firstName: guest.firstName, lastName: guest.lastName };
    } else {
      console.log('Guest not found. Please try again');
    }
    return next();
  }
  catch(err) {
    return next({
      log: 'RSVPController.findGuest error',
      status: 400,
      message: { err: 'Error occurred in RSVPController.findGuest' }
    });
  }
}

    
    
    // if (err) {
    //   return next({
    //     log: 'GuestController.createGuest error',
    //     status: 400,
    //     message: { err: 'Error occurred in GuestController.createGuest' }
    //   });
    // } else {

    //   res.locals.guest = guest;
    //   console.log('Successfully added guest', guest);
    //   return next();
    // }
//   })
// }

// const db = require("../models/foodModel");
// const fridgeController = {};

// //functionality to get an item from the database
// fridgeController.getItem = async (req, res, next) => {
//     try {
//         console.log('calling getItem')
//         const food = await db.findOne({ name: 'testFood' });
//         res.body = food;
//         return next();

// fridgeController.storeItem = (req, res, next) => {
//   try {
//       db.create({name: req.body.name}) // TODO IMPLEMENT THIS
//       console.log('made food')
//       return next();
      



module.exports = RSVPController;