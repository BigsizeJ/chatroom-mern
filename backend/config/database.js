const mongoose = require("mongoose");
require("dotenv").config();

const Connect = async () => {
  mongoose.connect(process.env.MONGODB_URL);
  const connection = await mongoose.connection;
  connection.on("error", (err) => {
    throw new Error(err);
  });
  connection.once("open", () => {
    console.log("Connected to Mongoose");
  });
};

module.exports = Connect;
