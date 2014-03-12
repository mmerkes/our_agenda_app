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
/*
Set up of DB:
1. create user user_name superuser;
2. create database db_name;
3. grant all privileges on database db_name to user_name;
4. create table users (
      id serial primary key, 
      first_name varchar(25), 
      last_name varchar(25), 
      email varchar(50)
    );
5. grant all privileges on users to user_name;
*/
