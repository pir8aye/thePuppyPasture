var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'thePuppyPasture',
    charset: 'utf8',
  }
});

db.knex.schema.hasTable('Puppies').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('Puppy', function (table) {
      table.increments('puppy_id').primary();
      table.string('name', 50);
      table.integer('price').unsigned();
      table.string('picURL', 255);
      table.timestamps();
    }).then(function (table) {
      console.log('Created Puppies Table!', table);
    }).catch(function(err) {
      console.error('Puppies Table already exists');
    });
  }
});

db.knex.schema.hasTable('Comments').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('Comments', function (table) {
      table.increments('comment_id').primary();
      table.string('comment', 255);
      table.integer('pupppy_id').unsigned().references('Puppies.puppy_id');
      table.timestamps();
    }).then(function (table) {
      console.log('Created Comments Table!', table);
    }).catch(function(err) {
      console.log('Comments Table already exists');
    });
  }
});

module.exports = db;