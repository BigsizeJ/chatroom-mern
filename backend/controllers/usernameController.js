const Username = require("../models/usernameModel");

const get_user = async (req, res) => {
  const data = await Username.find({});
  if (data) {
    return res.status(200).json(data);
  }
};

// POST USER
const post_user = async (req, res) => {
  const isExisted = await Username.exists({ username: req.body.username });
  if (isExisted) {
    return res.status(200).json(isExisted);
  } else {
    const data = await Username.create({ username: req.body.username });
    return res.status(200).json(data);
  }
};

module.exports = { post_user, get_user };
