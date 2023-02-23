const express = require("express");
const router = express.Router();
const Auth = require("../Controller/Auth");
router.post("/signup", Auth.signup);
router.post("/signin", Auth.signin);


module.exports = router;
