var express = require("express");
var router = express.Router();
const controller = require("../controllers/reservations");

/* GET Reservations page. */
router.get("/", controller.reservations);

module.exports = router;