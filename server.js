const express = require('express');
const app = express();
const path = require('path');
const port = 4040;

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendFile('./index.html');
});

app.listen(port, () => {
  console.log( `Listening on port ${port}...`);
});
