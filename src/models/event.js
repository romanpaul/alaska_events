const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: String,
  time: String,
  date: String,
  price: Number,
  capacity: Number,
});

const Event = mongoose.model('events', EventSchema);

module.exports = Event;