const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");

exports.home = (req, res) => {
  res.send("Hello World!");
};

exports.createUser = async (req, res) => {
  try {
    //extract info form client
    const { name, email, password } = req.body;

    console.log(password);

    if (!name || !email || !password) {
      throw new Error("Name and Email and password is required");
    }

    const userExitsts = await User.findOne({ email });

    if (userExitsts != null) {
      throw new Error("User Already Exists");
    }

    //hash a password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // PATH-1
    // const newUser = new User({ name, email });
    // await newUser.save();

    //PATH-2
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "user created successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    // Find the item by ID and update its fields
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    //how to get data from params
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
