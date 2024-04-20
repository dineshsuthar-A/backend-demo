const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var MemberSchema = new mongoose.Schema({
    MemberID: {
        type: String,
        required: true,
        unique: true
    },
    MemberName: {
        type: String,
        required: true,
        unique: true,
    }
});

//Export the model
module.exports = mongoose.model('Member', MemberSchema);