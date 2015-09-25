var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var db = require('./db/db.js');

var app = express();
console.log(__dirname + "/client");
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

app.listen(8080);
console.log('Dude, the server is listening on 8080');

app.get('/', function(req, res) {
  Puppies.reset().fetch().then(function(puppies) {
    res.send(200, puppies.models);
    })
});