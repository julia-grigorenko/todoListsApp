const mongoose = require('mongoose');
const config = require(__dirname + '/config');
//mongoose.set('debug', true);

mongoose.connect(config.mongoose.uri, config.mongoose.options);
const connection = mongoose.connection;


module.exports = {mongoose:mongoose, connection: connection};
