const express = require('express')
const app = express()


app.set('port', (process.env.PORT || 5001));

app.use('/', express.static('sdg-static'))

app.get('/', function (req, res) {
    res.send('Hello Heroku 2')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// //sammple code from Heroku
// app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/public'));

// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

// app.get('/cool', function(req, res) {
//   res.send(cool());
// });

// app.get('/times', function(req, res) {
//   var result = '';
//   var times = process.env.TIMES || 5
//   for (i=0; i<times; i++)
//     result += i + ' ';
//   res.send(result);  
// });

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });