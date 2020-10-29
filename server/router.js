var express = require('express');
var router = express.Router();
var controller = require('./controller');


module.exports = router
  .get('/', controller.get)
  .post('/', (req, res) => {
    res.send('Hit a post request on the groceries end point')
  })
  .put('/', (req, res) => {
    res.send('Hit a put request on the groceries end point')
  })
  .delete('/', (req, res) => {
    res.send('Hit a delete request on the groceries end point')
  })