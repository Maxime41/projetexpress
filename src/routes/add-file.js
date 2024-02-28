// routes/add-file.js
const express = require("express");
const router = express.Router();
const passport = require('passport');
const fileController = require("../controllers/fileController");
const checkBan = require("../middleware/checkBan");

router.post("/add-file", passport.authenticate('jwt-verify', { session: false }), checkBan, fileController.uploadFile, fileController.handleFileUpload);

module.exports = router;
