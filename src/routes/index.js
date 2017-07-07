const express = require('express');
const router = express.Router();
const Event = require('../models/event')


router.get('/', function(req, res){
   Event.find({}).then(function(events){
       res.send(events);
   });
     res.render('index');
 });

router.post('/events', (req, res) => {
    Event.create(req.body).then(function(events){
        res.send(event);
    });
});


module.exports = router;