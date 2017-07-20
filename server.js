const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./src/routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//using urlencode for form submissions and json for updates via ajax
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(routes);
//middleware for errors
app.use(function(err, req, res, next) {
    res.status(500).send({error: err.message});
});

//database is hosted on mlab.com
mongoose.connect('mongodb://admin:admin@ds141242.mlab.com:41242/alaska-events');
  

app.listen(3000, () => {
    console.log('listening on 3000')
  });