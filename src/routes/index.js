const express = require('express');
const router = express.Router();
const Event = require('../models/event')

router.get('/'), function(req, res, next){
    Event.find().toArray((err, result)) ;{
        if (err) return console.log(err)
    }
    
    res.render('index.ejs', {"events": result});
 };

router.post('/events', (req, res) => {
    Event.create(req.body);
    res.send({type: POST})
});


module.exports = router;