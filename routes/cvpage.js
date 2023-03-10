var express = require('express');
const Cvcontroller = require('../app/controllers/render/Cvcontroller');
var router = express.Router();

/* GET home page. */
router.get('/', Cvcontroller.index);

module.exports = router;
