const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes');
app.use(bodyParser.json())
const mongoose = require('mongoose');

var db

mongoose.createConnection('mongodb://admin:admin@ds141242.mlab.com:41242/alaska-events', (err, database) => {
 if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

const Schema = new mongoose.Schema({
  title: String,
  time: Number,
  date: Date,
  price: Number,
  capacity: Number,
});