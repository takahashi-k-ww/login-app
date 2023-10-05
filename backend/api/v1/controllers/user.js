const User = require("../models/User");
const CryptoJS = require("crypto-js");

// passwordがそのまま
exports.createSingleUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await CryptoJS.AES.encrypt(
    password,
    process.env.SECRET_KEY
  ).toString();
  console.log(hashedPassword);
  try {
    const user = await User.create({
      username: username,
      password: hashedPassword,
    });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};
