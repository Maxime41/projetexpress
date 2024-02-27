// routes/profile.js
const express = require("express");
const router = express.Router();
const passport = require('passport');
const profileController = require("../controllers/profileController");
const checkBan = require("../middleware/checkBan");

// Protect the /profile route with JWT authentication
router.get("/profile", passport.authenticate('jwt-verify', { session: false }), checkBan, profileController.getUserProfile);

module.exports = router;
