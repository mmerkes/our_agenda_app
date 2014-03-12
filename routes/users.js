'use strict';

var User = require('../models/User');

exports.collection = function(request, response) {
  response.setHeader("Content-Type", "text/json");

  User.find({}, function(error, users) {
    if(error) {
      response.writeHead(500);
      response.send({'error': error});
    } else {
      response.send(users);
    }
  });
};

exports.createUser = function(request, response) {
  response.setHeader('Content-Type', 'application/json');

  var user = new User(request.body);

  user.save(function(error, user) {
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

  User.findOne({ _id: request.params.id}, function(error, user) {
    if(error) {
      errorResponse();
    } else {
      response.send(user);
    }
  });
};

exports.updateUser = function(request, response) {
  console.log('PUT request');
  return User.findById( request.params.id, function(err, user) {
    user.first_name = request.body.first_name;
    user.last_name = request.body.last_name;
    user.email = request.body.email;

    return user.save(function(err) {
      if(err)
        console.log(err);
      else
        console.log('user updated');
      return response.send(user);
    });
  });
};

exports.deleteUser = function(request, response) {
  User.remove({_id: request.params.id}, function(error) {
    if(error) {
      errorResponse();
    } else {
      response.send({'message': 'Success'});
    }
  });
}

function errorResponse() {
  response.writeHead(500);
  response.send({'error': error});
};
