const Messages = require("../models/messageModel");

const get_messages = async (req, res) => {
  const messages = await Messages.find({});
  res.status(200).json(messages);
};

const post_message = async (req, res) => {
  const message = await Messages.create({
    user: req.body.username,
    message: req.body.message,
  });

  if (message) res.status(200).json(message);
  else throw new Error(message);
};

module.exports = {
  get_messages,
  post_message,
};
