const express = require("express");
const router = express.Router();
const User = require("../Controller/User");
router.get("/", User.getUser);
router.post("/", User.addUser);

module.exports = router;
