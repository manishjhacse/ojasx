const mongoose = require("mongoose");
const { User } = require("./userModel");
const eventSchema = new mongoose.Schema({
  event_name: { type: String },
  users: [
    {
      userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      userName: { type: String },
    },
  ],
  poster: { type: String },
  about: { type: String },
  registration_price: { type: Number, required: true },
  event_date: { type: String },
  event_managers: {
    name: { type: String },
    phone: { type: String },
  },
  category: { type: String },
  winner_prize: { type: String },
  runnerup_prize: { type: String },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = { Event };
