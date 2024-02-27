// middleware/checkBan.js
const User = require('../models/User');

const checkBan = async (req, res, next) => {
    try {
        // Get the user ID from the request
        const userId = req.user.id;

        // Retrieve the user from the database
        const user = await User.findByPk(userId);

        // Check if the user is banned
        if (user.isBanned) {
            return res.status(403).json({ error: "You are banned and cannot access this resource" });
        }

        // User is not banned, proceed to the next middleware
        next();
    } catch (error) {
        console.error("Error checking ban status:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = checkBan;
