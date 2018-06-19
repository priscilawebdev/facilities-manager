const express = require('express');
const path = require('path');
const cors = require('cors');
const facilities = require('./api/facilities');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get('/api/facilities', (req, res) => {
  res.send(facilities)
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});
