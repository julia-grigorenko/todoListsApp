const config = {};

config.port = 5005;

config.mongoose = {
    uri: "mongodb://127.0.0.1/notes",
    options: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
};

module.exports = config;
