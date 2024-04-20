const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var circulationSchema = new mongoose.Schema({
    BookID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    MemberID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
    CheckoutDate: {
        type: Date,
        default: Date.now()
    },
    ReturnDate: {
        type: Date,
        default: Date.now() + 7 * 24 * 60 * 60 * 1000
    }
});

//Export the model
module.exports = mongoose.model('Circulation', circulationSchema);