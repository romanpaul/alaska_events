const express = require('express');
const router = express.Router();
const Event = require('../models/event')


router.get('/', (req, res, next) => {
   Event.find({}).then(function(events){
       res.render('index', {events});
   })
       .catch(next);
 });

router.post('/', (req, res, next) => {
    console.log(req.body)
    Event.create(req.body)
        .then(function(events){
            res.send(events)
        })
        res.redirect('/')
        .catch(next);
});

router.put('/events/:id', (req, res, next) => {
    Event.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(event){
        res.send(event);
    })
        .catch(next);
});

router.delete('/events/:id', (req, res, next) => {
    Event.findByIdAndRemove({_id: req.params.id}).then(function(event){
        res.send(event);
    })
        .catch(next);

});


module.exports = router;