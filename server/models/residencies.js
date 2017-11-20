var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var ResidencySchema = newSchema({
    residencyName: { type: String, required: true },
    residencyText: { type: String, required: true }, 
    residencyDeadline: {type: Date, required: true},
    residencyLocation: { type: String, required: true },
    residencyUrl: { type: String },
    residencyimageUrl: { type: String }
});

module.exports = mongoose.model('Residency', ResidencySchema);