const Books = require('../models/Books');


exports.getAll = async (req, res) => {
    try {
        const books = await Books.find();
        res.send(books);
    } catch (err) {
        res.status(500);
        res.send({
            "Error": err
        });
    }
}

exports.getBook = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        if (!book) {
            res.status(404);
            res.send({
                "error": "Book not found"
            });
        }
        res.send(book);
    } catch (err) {
        res.status(500);
        res.send({
            "Error": err
        });
    }
}