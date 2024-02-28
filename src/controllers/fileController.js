const multer = require("multer");
const Image = require('../models/Image');

// Multer config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/"); // where we upload
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // To use name for database
    },
});

// What files are authorized ?
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"]; // Types of files
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); 
    } else {
        cb(new Error(" Unauthorized file format."), false); 
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

exports.uploadFile = upload.single("file"); // "file" is the name of the form-data key element

exports.handleFileUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send(" No file got uploaded");
        }

        // Save some info in the database
        const newImage = await Image.create({
            filename: req.file.originalname,
            filePath: req.file.path
        });

        res.json(newImage);
    } catch (error) {
        console.error(' Error when uploading :', error);
        res.status(500).send("An error has occured.", body);
    }
};