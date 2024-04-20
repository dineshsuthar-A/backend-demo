const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var bookSchema = new mongoose.Schema({
    BookID: {
        type: String,
        required: true,
        unique: true,
    },
    BookName: {
        type: String,
        required: true,
        unique: true,
    },
    NumberOfCopies: {
        type: String,
        required: true
    }
});

//Export the model
module.exports = mongoose.model('Book', bookSchema);