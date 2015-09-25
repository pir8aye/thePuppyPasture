var db = require('../db.js');
var Puppy = require('./Puppy.js');

var Comment = db.Model.extend({
	tableName: 'Comments',
	hasTimestamps: true,
	puppy: function() {
		return this.belongsTo(Puppy);
	}	
});

module.exports = Comment;