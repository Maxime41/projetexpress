// controllers/usersController.js
const User = require('../models/User');

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        // Check if the user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Delete the user
        await user.destroy();
        return res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
