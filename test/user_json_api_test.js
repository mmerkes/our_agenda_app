'use strict';
//jshint unused:false

var superagent = require('superagent');
var chai = require('chai'),
  expect = chai.expect,
  should = chai.should();
var app = require('../app').app;

describe('Users JSON api', function(){
  var id;
/*
  it('get a collection', function(done) {
    superagent.get("http://localhost:3000/api/v1/users").end( function( error, response ) {
      expect(error).to.be.eql(null);

      done();
    });
  });
*/
  it('should be able to create a user', function(done) {
    superagent.post('http://localhost:3000/api/v1/users')
      .send({
        first_name: "Ford", 
        last_name: "Prefect", 
        email: "ford.prefect@gmail.com"
      })
      .end(function(error, response) {
        expect(error).to.be.eql(null);
        expect(response.body.first_name).to.be.eql('Ford');

        id = response.body._id;

        done();
    });
  });
/*
  it('should be able to get a user by id', function(done) {
    superagent.get('http://localhost:3000/api/v1/users/' + id)
      .end( function(error, response) {
        expect(error).to.be.eql(null);
        expect(response.body._id).to.be.eql(id);
        expect(response.body.first_name).to.be.eql('Ford');
        expect(response.body.email).to.be.eql('ford.prefect@gmail.com');

        done();
    });
  });

  it('should be able to update a user', function(done) {
    superagent.put('http://localhost:3000/api/v1/users/' + id)
      .send({email: 'prefect@gmail.com'})
      .end( function(error, response) {
        expect(error).to.be.eql(null);

        expect(response.body.message).to.be.eql('Success');

        done();
    });
  });

  it('should be able to delete a user', function(done) {
    superagent.del('http://localhost:3000/api/v1/users/' + id)
      .end( function(error, response) {
        expect(error).to.be.eql(null);

        expect(response.body.message).to.be.eql('Success');

        done();
      });
  });
*/
});




