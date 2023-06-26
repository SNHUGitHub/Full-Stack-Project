var express = require("express");
var router = express.Router();
const controller = require("../controllers/signup");

/* GET Sign Up page. */
router.get("/", controller.signup);

module.exports = router;