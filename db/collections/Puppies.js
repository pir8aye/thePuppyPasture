var db = require('../db.js');
var Puppy = require('../models/Puppy.js');

var Puppies = new db.Collection();

Puppies.model = Puppy;

module.exports = Puppies;
