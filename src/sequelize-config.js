// sequelize-config.js
const { Sequelize } = require('sequelize');

// Configurer l'instance Sequelize avec les informations de connexion à la base de données
const sequelize = new Sequelize('projetexpress', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
});

// Exporter l'instance Sequelize pour pouvoir l'utiliser dans d'autres fichiers
module.exports = sequelize;
