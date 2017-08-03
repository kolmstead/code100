const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://joe:password@ds161471.mlab.com:61471/dang', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
});

// //connect to mlab mongodb via mongoose
// // mongoose.connect('mongodb://localhost/test');
// mongoose.connection.openUri('mongodb://joe:password@ds161471.mlab.com:61471/dang');

// //native ES6 promises for mongoose
//     mongoose.Promise = global.Promise;
//     assert.equal(query.exec().constructor, global.Promise);

// const Schema = mongoose.Schema;
// const userDataSchema = new Schema({
//   title: String,
//   content: String,
//   author: String
// }, {collection: 'user-data'});

// const userData = mongoose.model('UserData', userDataSchema);

// app.get('/get-data', function(req, res, next) { 
//   userData.find()
//     .then(function(doc) {
//       res.render('index', {items: doc});
//     });
//   // res.send('Hello from get-data 2!');
// });

// router.post('/insert', function(req, res, next) {
//   const item = {
//     title: req.body.title,
//     content: req.body.content,
//     author: req.body.author
//   };

//   const data = new UserData(item);
//   data.save();

//   res.redirect('/');
// })

app.set('port', (process.env.PORT || 5001));

app.use('/', express.static('sdg-static'))

app.get('/', function (req, res) {
    // res.send(`<a href="https://sdgtest.herokuapp.com/sdgs.html">Review UN Sustainable development goals</a>`)
  res.sendFile(__dirname + '/sdg-static/sdgs.html');
})

app.get('/try', function (req, res) {
  // res.send("am I at try?");
  res.sendFile(__dirname + '/sdg-static/mongo.html');
})

// app.post('/quotes', (req, res) => {
//   console.log(req.body)
// })

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})

