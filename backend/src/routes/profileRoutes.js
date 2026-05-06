const express = require("express");

const {
  calculateProfile,
  createProfile,
  getProfiles,
  getProfileById,
} = require("../controllers/profileController");

const router = express.Router();

router.post("/calculate", calculateProfile);

router.post("/profiles", createProfile);
router.get("/profiles", getProfiles);
router.get("/profiles/:id", getProfileById);

module.exports = router;