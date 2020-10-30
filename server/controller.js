var db = require('../db/index.js');
//var bluebird = require('bluebird');


module.exports = controller = {
  get: (req, res) => {
    db.User.findAll({
      attributes: ['id' ,'name', 'quantity']
    })
      .then( (data) => {
        res.status(200).send(data);
      })
      .catch( (err) => {
        res.status(400).send('Some error in the get controller');
      })
  },

  post: (req, res) => {
    db.User.create({
      name: req.body.name,
      quantity: req.body.quantity
    }, { fields: ['name', 'quantity'] })
      .then( (data) => {
        res.status(201).send();
      })
      .catch( (err) => {
        res.status(400).send('Some error in the post controller');
      })
  },

  put: (req, res) => {
    db.User.update({ quantity: req.body.quantity}, {
      where: {
        id: req.params.id
      }
    })
      .then( (data) => {
        res.status(201).send(data);
      })
      .catch( (err) => {
        res.status(400).send('Some error in the put controller');
      })
  },

  delete: (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then( (data) => {
        console.log('i am here in the then')
        console.log('data', data)
        res.status(202).send();
      })
      .catch( (err) => {
        res.status(400).send('Some error in the delete controller');
      })
  }
}