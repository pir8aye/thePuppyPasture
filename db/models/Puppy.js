var db = require('../db.js');
var Comment = require('./Comment.js');

var Puppy = db.Model.extend({
  tableName: 'Puppies',
  hasTimestamps: false,
  comment: function() {
    return this.hasMany(Comment);
  }
});

module.exports = Puppy;