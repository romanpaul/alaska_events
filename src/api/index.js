'use strict';

const express = require('express');

const router = express.Router();

router.get('/todos', function(req, res) {
    res.send('Test message');
})

module.exports = router;