const express = require("express");
const prisma = require("../config/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return res.status(200).json({
      status: "OK",
      service: "Intelligent Investor Backend",
      database: "Connected",
    });
  } catch (error) {
    return res.status(500).json({
      status: "ERROR",
      service: "Intelligent Investor Backend",
      database: "Disconnected",
      error: error.message,
    });
  }
});

module.exports = router;