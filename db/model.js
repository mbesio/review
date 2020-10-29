var db = require('./index.js');

module.exports = model = {
  get: (cb) => {
    db.connection.query('SELECT * FROM `users`', (err, data) => {
      if(err) {
        console.log('There was an error performing the query');
        cb (err);
      } else {
        console.log('The query was completed succesfully');
        cb(null, data);
      }

    })
    // will add some database function here


    var err = null;
    var results = 'success';
    console.log('in the model get');
  },
  post: () => console.log('in the model post'),
  put: () => console.log('in the model put'),
  delete: () => console.log('in the model delete')
}