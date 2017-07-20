const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

//Schema contains the parameters of my event data
const EventSchema = new Schema({
  title: String,
  time: String,
  date: String,
  price: String,
  capacity: Number,
});

const Event = mongoose.model('events', EventSchema);

//exported for use in routing
module.exports = Event;