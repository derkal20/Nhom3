var express = require('express');
var router = express.Router();
let homeController = require('../app/controllers/render/homeController')
let User = require('../app/models/user')
/* GET home page. */
router.get('/', homeController.index);
router.use('/cvpage', require('./cvpage'))
router.use('/api', require('./api'))


module.exports = router;
