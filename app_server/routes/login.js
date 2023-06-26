const express = require('express');
const router = express.Router();

/* GET Login page. */
const ctrlMain = require("../controllers/login");

router.get("/", ctrlMain.login);

module.exports = router;