// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Ensure email is unique
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Ensure nickname is unique
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // Default value is false
    }
});

module.exports = User;
