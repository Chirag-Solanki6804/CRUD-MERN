const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/db.js");

const app = express();

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// init to database
connectToDb();

const userRoutes = require("./routes/userRoutes.js");

app.use("/", userRoutes);

module.exports = app;
