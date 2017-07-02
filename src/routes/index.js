const router = require('express').Router();

router.get('/', (req, res) => {
  db.collection('events').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {events: result})
  })
})

router.post('/events', (req, res) => {
  db.collection('events').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

router.put('/events/:events_id', (req, res) => {
  const id = req.params.id;

  db.collection('events').updateOne(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('updated event')
    res.redirect('/')
  })
})

