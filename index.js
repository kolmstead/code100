const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
// const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://joe:password@ds161471.mlab.com:61471/dang', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
});

app.set('port', (process.env.PORT || 5001));

app.use('/', express.static('sdg-static'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/sdg-static/sdgs.html');
})

app.get('/try', function (req, res) {
  res.sendFile(__dirname + '/sdg-static/mongo.html');
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/joe', (req, res) => {
  db.collection('quotes').save({"name": "from joe", "quote":"joe says hello"}, (err, result) => {
    if (err) return console.log(err)
    console.log('another from joe')
    res.redirect('/try')
  })
})

app.get('/bob', (req, res) => {
  db.collection('quotes').save({"name": "from bob", "quote":"bob says hello"}, (err, result) => {
    if (err) return console.log(err)
    console.log('did bob go anywhere?')
    res.redirect('/try')
  })
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
