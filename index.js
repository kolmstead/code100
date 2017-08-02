const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');


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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

