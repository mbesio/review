const express = require('express');
const app = express();
const port = 1234;
const router = require('./router.js');

// whatever hits the groceries endpoint is managed through the router
app.use('/groceries', router);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});