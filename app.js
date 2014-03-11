'use strict';

var express = require('express'),
    http = require('http'),
    path = require('path'),
    Bookshelf = require('bookshelf'),
    config = require('./myConfig.js');

Bookshelf.PG = Bookshelf.initialize({
  client: 'mysql',
  connection: {
  host     : 'localhost',
  user     : 'mmerkes',
  password : 'bikerdude',
  database : 'oaa',
  charset  : 'utf8'
} 
});

var app = express();

app.configure( function() {
  // parses request coming in and going how
  // separate head from body
  app.use(express.bodyParser());
  // handles the routing, include router last
  app.use(app.router);
});

app.configure('development', function() {
  // Logs errors
  app.use(express.errorHandler());
});

/*
//if( process.argv[2] === 'mongo') {
  // Mongoose Routes
  var users = require('./routes/users');

  app.get('/api/v1/users', users.collection );

  app.post('/api/v1/users', users.createUser);

  app.get('/api/v1/users/:id', users.findById);

  app.put('/api/v1/users/:id', users.updateUser);

  app.delete('/api/v1/users/:id', users.deleteUser);
}
else {*/
  // PostgreSQL routes
  var users = require('./routes/usersPG');

  app.post('/api/v1/users', users.createUser);
/*
  var pg = require('pg'); 
  //or native libpq bindings
  //var pg = require('pg').native

  var client = new pg.Client(config.options);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM users', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0].first_name);
      //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
      client.end();
    });
  });
}*/

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('Server now listening to port 3000.');
});
