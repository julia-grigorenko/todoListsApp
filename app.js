const express = require('express');
const bodyParser = require("body-parser");

const notesRouter = require('./routes/notes');
const config = require(__dirname + '/libs/config');

require('dotenv').config();

const app = express();
const port = process.env.PORT || config.port;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', notesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
