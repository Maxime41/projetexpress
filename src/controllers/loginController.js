// controllers/loginController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.loginUser = async (req, res) => {
    const { nickname, password } = req.body;

    try {
        // Find the user by nickname
        const user = await User.findOne({ where: { nickname } });

        // If user not found or password does not match, return error
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Bad credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

        // Return token
        return res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

