const express = require("express");
const router = express.require ();
const userCtrl = require("../controllers/user");

route.post("/signup", userCtrl.signup);
route.post("/login", userCtrl.login);

module.exports = router;