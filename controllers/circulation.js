const Books = require('../models/Books');
const Member = require('../models/Members');
const Circulation = require("../models/Circulation");

exports.issue = async (req, res) => {
    try {
        console.log(req.body);
        const memberId = req.body.memberID;
        const bookId = req.body.bookId;
        const book = await Books.findById(bookId);
        if (!book || book.length == 0) {
            return res.status(404).send({
                error: "Book not found"
            });
        }
        if (book.NumberOfCopies === 0) {
            return res.send({
                "error": "No books available"
            });
        }
        const member = await Member.findById(memberId);


        if (!member || member.length == 0) {
            return res.status(404).send({
                error: "Member not found"
            });
        }

        let circulation = new Circulation({
            BookID: bookId,
            MemberID: member.id
        });
        circulation.save();
        const newBook = {
            BookID: bookId,
            BookName: book.BookName,
            NumberOfCopies: book.NumberOfCopies - 1
        }
        Books.updateOne(book, newBook);
        return res.send(circulation);

    } catch (err) {
        res.status(500);
        res.send({
            "Error": err
        });
    }
}



exports.issuedAll = async (req, res) => {
    try {
        const circulation = await Circulation.find().populate('BookID').populate('MemberID');
        res.send(circulation);
    } catch (err) {
        res.status(500);
        res.send({
            "Error": err
        });
    }
}


exports.fineCalculate = async (req, res) => {
    try {
        const id = req.params.id;
        const circulation = await Circulation.findById(id);
        const DaysGone = Math.round((circulation.ReturnDate.getTime() - Date.now().getTime()) / (1000 * 3600 * 24));
        res.send({
            fine: DaysGone * 50
        });
    } catch (err) => {
        res.status(500);
        res.send({
            "Error": err
        });
    }
}