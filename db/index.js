var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Groceries'
});

connection.connect((err) => {
  if(err) {
    console.log('There was an error hooking up the db');
  } else {
    console.log('Groceries database connected');
  }
});

module.exports.connection = connection;