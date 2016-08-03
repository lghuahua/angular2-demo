var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var assert = require('assert');
var bodyParser = require('body-parser');

var app = express();

var users = require('./routes/users');

app.use('/public', express.static(__dirname + '/public'));
app.use('/public/scripts', express.static(__dirname + '/node_modules'));
app.use(express.static('./'))

// api
app.use('/users', users);

// angular
app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, function() {
    console.log('Angular app listening on port 3000');
});