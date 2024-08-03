const express = require("express");
const router = express.Router();
const {addEvent}=require("../controllers/eventController")
router.post("/addevent",addEvent)
module.exports = router;