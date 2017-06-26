const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
    console.log("The mighty eye is watching on port 3000");
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/events', (req, res) => {
  console.log(req.body)
})