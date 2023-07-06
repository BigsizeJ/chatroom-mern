const express = require("express");
const { post_user, get_user } = require("../controllers/usernameController");
const router = express.Router();

router.get("/", get_user);

router.post("/", post_user);

module.exports = router;
