'use strict';

var User = require('../models/UserPG');

exports.createUser = function(request, response) {
  response.setHeader('Content-Type', 'application/json');

  var body = request.body;
  var first_name = body.first_name;
  var last_name = body.last_name;
  var email = body.email;
  User.forge({first_name: first_name, last_name: last_name, email: email}).save().then(function(user) {
    response.send(user);
  });
};

/*
exports.collection = function(request, response) {
  response.setHeader("Content-Type", "text/json");

  User.find({}, function(error, users) {
    if(error) {
      response.writeHead(500);
      response.send({'error': error});
    }

    response.send(users);
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
  User.update({_id: request.params.id}, request.body, function(error) {
    if(error) {
      errorResponse();
    } else {
      response.send({'message': "Success"});
    }
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
*/
