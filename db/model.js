// this file is not used anymore with the refactor to sequelize

var db = require('./index.js');

module.exports = model = {
  get: (cb) => {
    db.connection.query('SELECT * FROM `users`', (err, data) => {
      if(err) {
        console.log('There was an error performing the select query');
        cb (err);
      } else {
        console.log('The select query was completed succesfully');
        cb(null, data);
      }
    })
  },
  post: (body, cb) => {
    var insert = {
      name: body.name,
      quantity: body.quantity
    };
    db.connection.query('INSERT INTO users SET ?', insert, (err, data) => {
      if(err) {
        console.log('There was an error performing the insert query');
        cb (err);
      } else {
        console.log('The insert query was completed succesfully');
        cb(null, data);
      }
    })
  },
  put: (id, body, cb) => {
    db.connection.query('UPDATE users SET quantity = ? where id = ?', [body.quantity, id], (err, data) => {
      if(err) {
        console.log('There was an error performing the update query');
        cb(err);
      } else {
        console.log('The update query was completed successfully');
        cb(null, data);
      }
    })
  },
  delete: (id, cb) => {
    db.connection.query('DELETE FROM users where id = ?', [id], (err, data) => {
      if(err) {
        console.log('There was an error performing the delete query');
        cb(err);
      } else {
        console.log('The delete query was completed successfully');
        cb(null, data);
      }
    })
  }
}