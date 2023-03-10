var express = require('express');
var router = express.Router();
var Cvapi = require('../app/controllers/api/Cvapi')
/* GET home page. */
router.get('/cv', Cvapi.index);


module.exports = router;
