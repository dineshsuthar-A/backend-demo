const express = require('express')
const router = express.Router()
const controller = require('../controllers/books');


router.get('/all', controller.getAll);


router.get('/:id', controller.getBook);

module.exports = router;