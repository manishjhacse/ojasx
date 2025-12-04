const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (email, subject, text) => {
  try {
    const data = await resend.emails.send({
      from: "OTP Service <onboarding@resend.dev>",   
      to: email,
      subject: subject,
      text: text,
    });

    return {
      success: true,
      message: "OTP Sent",
      data
    };

  } catch (err) {
    return {
      success: false,
      message: "OTP can't be sent, try again",
      error: err.message,
    };
  }
};
