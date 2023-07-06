const express = require("express");
const router = express.Router();

const {
  get_messages,
  post_message,
} = require("../controllers/chatRoomController");

router.get("/", get_messages);
router.post("/", post_message);

module.exports = router;
