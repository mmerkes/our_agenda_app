'use strict';

var User = require('../models/userPG'),
    Users = require('../collections/usersPG.js'),
    Promise = require('bluebird');

exports.createUser = function(request, response) {
  response.setHeader('Content-Type', 'application/json');

  var body = request.body;
  var first_name = body.first_name;
  var last_name = body.last_name;
  var email = body.email;
  User.forge({first_name: first_name, last_name: last_name, email: email})
    .save()
    .exec(function(error, user) {
      if(error) {
        response.writeHead(500);
        response.send({'error': error});
      } else {
        response.send(user);
      }
  });
};

exports.findById = function(request, response) {
  response.setHeader('Content-Type', 'application/json');

  new User({'id': request.params.id})
    .fetch()
    .exec( function(error, user) {
      if(error) {
        response.writeHead(500);
        response.send({'error': error});
      } else {
        response.send(user);
      }
  });
};

exports.updateUser = function(request, response) {
  new User({id: request.params.id})
    .save(request.body, {patch: true})
    .exec(function(error) {
      if(error) {
        errorResponse();
      } else {
        response.send({'message': "Success"});
      }
  });
};

exports.deleteUser = function(request, response) {
  new User({id: request.params.id})
    .destroy()
    .exec(function(error) {
      if(error) {
        errorResponse();
      } else {
        response.send({'message': "Success"});
      }
  });
};

exports.collection = function(request, response) {
  response.setHeader("Content-Type", "text/json");

  new Users().fetch()
    .exec(function(error, users) {
      if(error) {
        response.writeHead(500);
        response.send({'error': error});
      } else {
        response.send(users);
      }
  });
};



function errorResponse() {
  response.writeHead(500);
  response.send({'error': error});
};
