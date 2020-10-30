var db = require('./index.js');

module.exports = model = {
  get: (cb) => {
    db.Groceries.find( (err, data) => {
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
    db.Groceries.create(insert, (err, data) => {
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
    db.Groceries.update({_id: id}, {quantity: body.quantity}, (err, data) => {
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
    db.Groceries.deleteOne({_id: id}, (err, data) => {
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