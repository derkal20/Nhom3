var express = require('express');
var router = express.Router();
cvController = require('../controller/cvController')

/* GET home page. */
router.get('/', cvController.index);

module.exports = router;
