// controllers/profileController.js
const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
    try {
        // Retrieve user's credentials based on nickname provided in the request
        const user = await User.findOne({ where: { nickname: req.query.nickname } });

        // If user not found, return error
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return user's credentials
        return res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            nickname: user.nickname
        });
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
