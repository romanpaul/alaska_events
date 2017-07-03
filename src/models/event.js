const mongoose = require('mongoose');
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