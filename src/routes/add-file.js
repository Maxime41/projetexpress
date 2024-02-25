// routes/add-file.js
const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

// Route POST pour télécharger un fichier
router.post("/add-file", fileController.uploadFile, fileController.handleFileUpload);

module.exports = router;