var db = require('../db.js');
var Comment = require('../models/Comment.js');

var Comments = new db.Collection();

Comments.model = Comment;

module.exports = Comments;
