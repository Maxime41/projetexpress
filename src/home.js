require('dotenv').config(); 
// server-express.js
const express = require("express");

// Initialiser tout
const app = express(); // initialize app
const bodyParser = require("body-parser"); //  body-parser
const passport = require('passport'); //passport
const sequelize = require('./sequelize-config'); // bdd
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Add body-parser middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize()); // init passport

// Imports
const fileRoutes = require("./routes/add-file");
const helloroute = require("./routes/helloroute");
const registerRoute = require("./routes/register"); // Add the registration route
const loginRoute = require("./routes/login");
const profileRoute = require("./routes/profile");

// Routes
app.use("/", helloroute);
app.use("/", fileRoutes);
app.use("/", registerRoute); // Use the registration route
app.use("/", loginRoute);
app.use("/", profileRoute);

//Passport config
require('./passport');

// Synchronisation du modèle avec la base de données
(async () => {
    try {
        // Synchronise le modèle avec la base de données
        await sequelize.sync();
        console.log('La synchronisation avec la base de données a réussi.');
    } catch (error) {
        console.error('Erreur lors de la synchronisation avec la base de données :', error);
    }
})();


// Lancer serveur
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});