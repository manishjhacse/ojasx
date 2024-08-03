const { User } = require("../models/userModel");
const sendMail = require("../utills/sendEmail");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function isFileTypeSupported(fileType, supportedFiles) {
  return supportedFiles.includes(fileType);
}
// signup controller
exports.signup = async (req, res) => {
  try {
    const { name, email, password, mobile, otp, college } = req.body;
    const file = req.files?.image;
    email.toLowerCase();
    const existingUser = await User.findOne({ email });
    if (existingUser.password) {
      return res.status(400).json({
        success: false,
        message: "User already exist with this email id",
      });
    }
    if (existingUser.otp.code != otp) {
      return res.status(400).json({
        success: false,
        message: "wrong OTP",
      });
    }
    if (new Date(Date.now()) > existingUser.otp.validTime) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    const supportedFiles = ["jpg", "jpeg", "png"];
    let imageurl =
      "https://res.cloudinary.com/dfrcswf0n/image/upload/v1722092104/RoomImages/vgwtyhexx9ysttmcrrxe.png";
    if (file) {
      const fileType = file.name.split(".").pop().toLowerCase();
      if (!isFileTypeSupported(fileType, supportedFiles)) {
        return res.status(400).json({
          success: false,
          message: "file format not supported",
        });
      }
      const response = await uploadFileToCloudinary(file, "RoomImages");
      imageurl = response?.secure_url;
    }
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Error in hashing password",
        error: err.message,
      });
    }
    const user = await User.findOneAndUpdate(
      { email },
      {
        name,
        password: hashedPassword,
        mobile,
        profile_pic: imageurl,
        college,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "User can't created, Try again",
      error: err,
    });
  }
};

//otp for signup controller
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    email.toLowerCase();
    const code = Math.floor(1000 + Math.random() * 9000);
    otp = {
      code,
      validTime: new Date(Date.now() + 10 * 60 * 1000),
    };
    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.password) {
      return res.status(400).json({
        success: false,
        message: "User already exist with this email id",
      });
    }
    if (existingUser) {
      const user = await User.findOneAndUpdate(
        { email },
        { otp },
        { new: true }
      );
    } else {
      const user = await User.create({
        email,
        otp,
      });
    }
    const mailMessage = `your otp for account creation is ${otp.code}`;
    const result = await sendMail(email, "verify email", mailMessage);

    if (result.success) {
      return res.status(201).json(result);
    } else {
      return res.status(501).json(result);
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "cat't sent OTP",
      Error: err,
    });
  }
};

//login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "please provide all the details",
      });
    }
    email.toLowerCase();
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not exist with this email",
      });
    }
    const payload = {
      email: user.email,
      _id: user._id,
      name: user.name,
    };
    if (await bcrypt.compare(password, user.password)) {
      let token = await jwt.sign(payload, process.env.SECRETCODE, {});
      user.password = undefined;
      const options = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "None",
        secure: true,
      };
      return res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Login failure, Try Again",
      Error: err,
    });
  }
};
