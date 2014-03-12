var Bookshelf = require('bookshelf').PG,
    User = require('../models/userPG.js');

var Users = Bookshelf.Collection.extend({
  model: User
});

module.exports = Users;
