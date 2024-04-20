const Member = require('../models/Books');


exports.getAll = async (req, res) => {
    try {
        const members = await Member.find();
        res.send(members);
    } catch (err) {
        res.status(500);
        res.send({
            "Error": err
        });
    }
}

exports.getMember = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) {
            res.status(404);
            res.send({
                "error": "member not found"
            });
        }
        res.send(member);
    } catch (err) {
        res.status(500);
        res.send({
            "Error": err
        });
    }
}