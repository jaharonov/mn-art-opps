var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var GrantSchema = newSchema({
    grantName: { type: String, required: true },
    grantInfo: { type: String, required: true },
    grantDeadline: { type: Date, required: true },
    grantLocation: {type: String, required: true},
    grantUrl: {type: String},
    grantimageUrl: {type: String}
});

module.exports = mongoose.model('Grant', GrantSchema);