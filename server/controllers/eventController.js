const { Event } = require("../models/eventModel");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

//check file type
function isFileTypeSupported(fileType, supportedFiles) {
  return supportedFiles.includes(fileType);
}
//upload image to cloudinary
async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  options.resource_type = "auto";
  if (quality) {
    options.quality = quality;
  }
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}
exports.addEvent = async (req, res) => {
  try {
    const {
      about,
      registration_price,
      event_managers,
      winner_prize,
      runnerup_prize,
    } = req.body;
    const event_managersObj = JSON.parse(event_managers);
    const file = req.files?.image;
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
      const response = await uploadFileToCloudinary(file, "Event-Image");
      imageurl = response?.secure_url;
    }
    const event = await Event.create({
      about,
      registration_price,
      event_managers:event_managersObj,
      winner_prize,
      runnerup_prize,
      poster:imageurl
    });

    return res.status(201).json({
      success: true,
      message: "Event created successfully",
      event,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Event not created, try again",
      error: err.message,
    });
  }
};
