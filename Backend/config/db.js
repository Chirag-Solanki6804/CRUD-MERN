const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
      });
  } catch {
    console.log("something went wrong in Database connection");
  }
};

module.exports = connectToDb;
