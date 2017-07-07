const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: String,
  time: Number,
  date: Date,
  price: Number,
  capacity: Number,
});

const Event = mongoose.model('events', EventSchema);

module.exports = Event;