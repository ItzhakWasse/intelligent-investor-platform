const express = require("express");
const cors = require("cors");
require("dotenv").config();

const healthRoutes = require("./routes/healthRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);
app.use("/api", profileRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Intelligent Investor API is running",
  });
});

module.exports = app;