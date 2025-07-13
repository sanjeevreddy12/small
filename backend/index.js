const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
}); 