const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(routes);
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://admin:admin@ds141242.mlab.com:41242/alaska-events'); 
  app.listen(3000, () => {
    console.log('listening on 3000')
  });

/*app.get('/view/index.ejs', (req, res) => {
  db.collection('events').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {events: result})
  })
})

app.post('/events', (req, res) => {
  db.collection('events').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/events/:events_id', (req, res) => {
  const id = req.params.id;

  db.collection('events').updateOne(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('updated event')
    res.redirect('/')
  })
})
*/