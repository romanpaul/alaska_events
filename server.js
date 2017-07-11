const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./src/routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(routes);


mongoose.connect('mongodb://admin:admin@ds141242.mlab.com:41242/alaska-events');
  

app.listen(3000, () => {
    console.log('listening on 3000')
  });