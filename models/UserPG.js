var Bookshelf = require('bookshelf').PG;

var User = Bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = User;

/*
  first_name: String,
  last_name: String,
  email: String
*/

/*
COMMANDS
http://blog.niklasottosson.com/?p=1388

\connect dbName -> connect to a database
\list -> list all db names
*/
