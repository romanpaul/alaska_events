const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://admin:admin@ds141242.mlab.com:41242/alaska-events', (err, database) => {
 if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}))

//app.listen(3000, function() {
//    console.log("The mighty eye is watching on port 3000");
//}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/events', (req, res) => {
db.collection('events').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})