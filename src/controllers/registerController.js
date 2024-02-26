// controllers/registerController.js
const { Op } = require("sequelize");
const User = require('../models/User');


exports.registerUser = async (req, res) => {
    try {
        
        const { firstName, lastName, email, nickname } = req.body;
        console.log('Request Body:', req.body); // Log the request body

        // Check if the user with the same email or nickname already exists
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [{ email: email }, { nickname: nickname }]
            }
        });
        if (existingUser) {
            return res.status(400).json({ error: "Email or nickname already in use" });
        }

        // Create the user
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            nickname
        });

        res.status(201).send("OK");
    } catch (error) {
        console.error('Error while registering user:', error);
        res.status(500).send("KO");
    }
};
