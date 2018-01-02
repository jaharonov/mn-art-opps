var mongoose = require('mongoose');

// Mongo Connection //
var mongoURI = 'mongodb://jaffa:213113ab@ds143342.mlab.com:43342/heroku_84kdhmr6';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if (process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    mongoURI = 'mongodb://localhost:27017/soloproject';
}

mongoose.connect(databaseUrl, {
    useMongoClient: true
});

mongoose.connection.on('error', function (err) {
    if (err) {
        console.log("MONGO ERROR: ", err);
    }
    res.sendStatus(500);
});

mongoose.connection.on('open', function () {
    console.log("Connected to Mongo!");
});

module.exports = mongoose;