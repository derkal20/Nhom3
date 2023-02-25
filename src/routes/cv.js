const express = require("express");
const route = express.Router();
const cvController = require("../app/controllers/cvController");
route.get("/", cvController.cv);
module.exports = route;
