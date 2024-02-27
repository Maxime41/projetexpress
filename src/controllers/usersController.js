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

exports.getAllUsers = async (req, res) => {
    try {

        // Retrieve all users from the database
        const users = await User.findAll();

        // Return the list of users
        return res.json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

exports.makeUserAdmin = async (req, res) => {
    try {
        const userId = req.params.userId;
        // Check if the user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Make the user an admin
        user.isAdmin = true;
        await user.save();
        return res.json({ message: "User is now an admin" });
    } catch (error) {
        console.error("Error making user admin:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

exports.removeAdminRole = async (req, res) => {
    try {
        const userId = req.params.userId;
        // Check if the user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Remove admin role from the user
        user.isAdmin = false;
        await user.save();
        return res.json({ message: "Admin role removed from user" });
    } catch (error) {
        console.error("Error removing admin role from user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};