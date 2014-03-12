'use strict';

var express = require('express'),
    http = require('http'),
    path = require('path'),
    Bookshelf = require('bookshelf'),
    config = require('./myConfig');

Bookshelf.PG = Bookshelf.initialize({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'matt_oaa',
    database: 'oaa',
    charset: 'utf8'
  } 
});

var app = express();

app.configure( function() {
  // parses request coming in and going how
  // separate head from body
  app.use(express.bodyParser());
  // handles the routing, include router last
  app.use(app.router);

  app.use(express.static(path.join(__dirname, 'build')));
});

app.configure('development', function() {
  // Logs errors
  app.use(express.errorHandler());
});

var users;

if( process.argv[2] === 'mongo') {
  // Mongoose Routes
  users = require('./routes/users');
}
else {
  //users = require('./routes/usersPG');
}

app.get('/api/v1/users', users.collection );

app.post('/api/v1/users', users.createUser);

app.get('/api/v1/users/:id', users.findById);

app.put('/api/v1/users/:id', users.updateUser);

app.delete('/api/v1/users/:id', users.deleteUser);


var server = http.createServer(app);

server.listen(3000, function() {
  console.log('Server now listening to port 3000.');
});
