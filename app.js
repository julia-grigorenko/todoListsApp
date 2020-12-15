const express = require('express');
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5005;

app.get('/', (req, res) => {
  res.send('hello');
});
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
