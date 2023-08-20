const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
    maxLength: [20, "name must be less than 20 char"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // profileImage: {
  //   type: String,
  //   require: [true, "Profile Picture is required"],
  // },
});

module.exports = mongoose.model("User", userSchema);
