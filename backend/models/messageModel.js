const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    user: String,
    message: {
      type: String,
      minLength: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
