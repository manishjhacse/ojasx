const express = require("express");
const router = express.Router();
const { addEvent, getAllEvent } = require("../controllers/eventController");
router.post("/addevent", addEvent);
router.get("/allevents", getAllEvent);
module.exports = router;
