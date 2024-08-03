const express = require("express");
const router = express.Router();
const {login,sendOtp,signup}=require("../controllers/userController")
const {auth}=require("../auth/userAuth")
router.post("/signup",signup);
router.post("/login",login)
router.post("/sendotpforsignup",sendOtp)
module.exports = router;