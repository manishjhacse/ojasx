const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      // service: "hotm2qail",
      secure: true,
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.EMAILID,
        pass: process.env.EMAILPASSWORD,
      },
      //   tls: {
      //     minVersion: 'TLSv1.2',
      //   },
    });
    
    await transporter.sendMail({
      from: process.env.EMAILID,
      to: email,
      subject: subject,
      text: text,
    });
    return {
      success: true,
      message: "OTP Sent",
    };
  } catch (err) {
    return {
      success: false,
      message: "OTP can't be sent, try again",
      error: err.message,
    };
  }
};
