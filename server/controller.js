var model = require('../db/model.js');

module.exports = controller = {
  get: (req, res) => {
    model.get((err, data) => {
      if (err) {
        res.status(400).send('Some error in the controller');
      } else {
        res.status(200).send(data);
      }
    })
  },

  post: () => console.log('controller for the post request'),

  put: () => console.log('controller for the put request'),

  delete: () => console.log('controller for the delete request')
}