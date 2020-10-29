var express = require('express');
var router = express.Router();
var controller = require('./controller');


module.exports = router
  .get('/', controller.get)
  .post('/', controller.post)
  .put('/:id', controller.put)
  .delete('/:id', controller.delete)