// models/Image.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config');

const Image = sequelize.define('Image', {
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Image;