require('dotenv').config(); // get the .env file 
// server-express.js
const express = require("express");

// Init
const app = express(); // initialize app
const bodyParser = require("body-parser"); //  body-parser
const passport = require('passport'); //passport
const sequelize = require('./sequelize-config'); // Database
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Add body-parser middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize()); // init passport

// Imports routes
const fileRoutes = require("./routes/add-file");
const helloroute = require("./routes/helloroute");
const registerRoute = require("./routes/register"); 
const loginRoute = require("./routes/login");
const profileRoute = require("./routes/profile");
const usersRoute = require("./routes/users"); 

// Routes
app.use("/", helloroute);
app.use("/", fileRoutes);
app.use("/", registerRoute); 
app.use("/", loginRoute);
app.use("/", profileRoute);
app.use("/users", usersRoute); 


//Passport config
require('./passport');

// Check if database is working
(async () => {
    try {
        // Synchronize
        await sequelize.sync();
        console.log('Synchronization succesful');
    } catch (error) {
        console.error(' Error :', error);
    }
})();


// Launch server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});