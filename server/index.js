const express = require('express');
const app = express();
const port = 1234;

app.get('/', (req, res) => {
  res.end('Hello world');
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});