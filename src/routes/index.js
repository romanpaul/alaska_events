const express = require('express');
const router = express.Router();
const Event = require('../models/event')


router.get('/', (req, res) => {
   Event.find({}).then(function(events){
       console.log(events);
       res.render('index', {events});
   })
    .catch(err => {
        res.send(err.message)
    })
 });

router.post('/', (req, res) => {
    console.log(req.body)
    Event.create(req.body)
        .then(function(events){
            res.send(events)
        })
        res.redirect('/')
        .catch(err => {
            console.log("Everything is broken always", err.message);
            console.log(err.stack);
            res.send(err.message);
        })
});


module.exports = router;