const express = require('express')
const router = express.Router()
const controller = require('../controllers/circulation');


router.post('/issue', controller.issue);
router.get('/all', controller.issuedAll);
router.get('/fine/:id', controller.fine);
module.exports = router;