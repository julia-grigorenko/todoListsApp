const express = require('express');
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5005;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("list");
  });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
