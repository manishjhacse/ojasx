const mongoose = require("mongoose");
const { User } = require("./userModel");
const eventSchema = new mongoose.Schema({
  users: [
    {
      userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      userName: { type: String },
    },
  ],
  poster: { type: String },
  about: { type: String },
  registration_price: { type: Number, required: true },
  event_date: { type: Date, default: Date.now },
  event_managers: [
    {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
  ],
  prize: {
    first_position: {},
    second_position: {},
    third_position: {},
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = { Event };
