var express = require('express');
var router = express.Router();


module.exports = router
  .get('/', (req, res) => {
    res.send('Hit a get request on the groceries end point')
  })
  .post('/', (req, res) => {
    res.send('Hit a post request on the groceries end point')
  })