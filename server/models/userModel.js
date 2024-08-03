const mongoose = require("mongoose");
const {Event}=require("./eventModel")
const userSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, trim: true },
  mobile: { type: Number },
  otp: {
    code: { type: String },
    validTime: { type: Date },
  },
  password: { type: String },
  profile_pic: { type: String },
  college: { type: String },
  events: [
    {
      eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
      eventName:{
        type:String
      }
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
