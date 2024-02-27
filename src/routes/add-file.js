// routes/add-file.js
const express = require("express");
const router = express.Router();
const passport = require('passport'); // Import Passport
const fileController = require("../controllers/fileController");
const checkBan = require("../middleware/checkBan");

// Secure the route using Passport authentication middleware
router.post("/add-file", passport.authenticate('jwt-verify', { session: false }), checkBan, fileController.uploadFile, fileController.handleFileUpload);

module.exports = router;
