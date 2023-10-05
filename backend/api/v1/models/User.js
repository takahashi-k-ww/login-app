const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    max: 20,
    min: 1,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = new mongoose.model("User", UserSchema);
