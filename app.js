const express = require('express');
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const port = process.env.PORT || config.port;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render("list");
  });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
