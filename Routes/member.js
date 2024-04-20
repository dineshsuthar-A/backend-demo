const express = require('express')
const router = express.Router()
const controller = require('../controllers/member');


router.get('/all', controller.getAll);


router.get('/:id', controller.getMember);

module.exports = router;