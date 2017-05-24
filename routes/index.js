var express = require('express');
var router = express.Router();
var indexControllers = require('../controllers/indexControllers')

//Send keyword search and get JSON return
router.get('/:keyword', indexControllers.searchReturn);

module.exports = router;
