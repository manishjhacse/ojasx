const express = require("express");
const router = express.Router();
const {
  login,
  sendOtp,
  signup,
  sendOtpToChangePassword,
  changePassword,
} = require("../controllers/userController");
const { auth } = require("../auth/userAuth");
router.post("/signup", signup);
router.post("/login", login);
router.post("/sendotpforsignup", sendOtp);
router.post("/changepassword", changePassword);
router.post("/otpforresetpassword", sendOtpToChangePassword);
module.exports = router;