// sequelize-config.js
const { Sequelize } = require('sequelize');

// Configurer l'instance Sequelize avec les informations de connexion à la base de données
const sequelize = new Sequelize('projetexpress', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
});

// Tester la connexion à la base de données
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('La connexion à la base de données a réussi.');
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
}

// Exporter l'instance Sequelize pour pouvoir l'utiliser dans d'autres fichiers
module.exports = sequelize;
