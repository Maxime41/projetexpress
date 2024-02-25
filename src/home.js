// server-express.js Barachet Maxime / Brice Noah
const express = require("express");

// Initialiser tout
const app = express(); // initialize app
const sequelize = require('./sequelize-config'); // init bdd
const port = 3000;

// Imports
const fileRoutes = require("./routes/add-file");

// Routes
app.use("/", fileRoutes);

// Synchronisation du modèle avec la base de données
(async () => {
    try {
        // Synchronise le modèle avec la base de données
        await sequelize.sync();
        console.log('La synchronisation avec la base de données a réussi.');
    } catch (error) {
        console.error('Erreur lors de la synchronisation avec la base de données :', error);
    }
})()


// Lancer serveur
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});