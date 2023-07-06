const mongoose = require("mongoose");

const usernameSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter username"],
  },
});

module.exports = mongoose.model("Username", usernameSchema);
