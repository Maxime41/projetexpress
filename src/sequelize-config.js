// sequelize-config.js
const { Sequelize } = require('sequelize');

// Config sequelize
const sequelize = new Sequelize('projetexpress', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
});

module.exports = sequelize;
