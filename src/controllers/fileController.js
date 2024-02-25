const multer = require("multer");
const Image = require('../models/Image');

// Configuration de Multer pour spécifier le dossier de destination et le nom du fichier
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/"); // Le dossier où stocker les fichiers téléchargés
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Utilisation du nom de fichier d'origine
    },
});

// Filtrage des types de fichiers autorisés
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"]; // Types de fichiers autorisés
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Autorise le téléchargement du fichier
    } else {
        cb(new Error("Type de fichier non autorisé."), false); // Rejette le téléchargement du fichier
    }
};

// Initialisation de l'instance Multer avec la configuration et le filtre
const upload = multer({ storage: storage, fileFilter: fileFilter });

exports.uploadFile = upload.single("file"); // "file" est le nom du champ de fichier dans le formulaire

exports.handleFileUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("Aucun fichier n'a été téléchargé.");
        }

        // Enregistrer les informations de l'image dans la base de données
        const newImage = await Image.create({
            filename: req.file.originalname,
            filePath: req.file.path
        });

        // Renvoyer une réponse avec l'image enregistrée
        res.json(newImage);
    } catch (error) {
        console.error('Erreur lors du téléchargement du fichier :', error);
        res.status(500).send("Une erreur est survenue lors du téléchargement du fichier.", body);
    }
};