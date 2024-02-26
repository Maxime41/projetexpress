// routes/users.js
const express = require("express");
const router = express.Router();
const passport = require('passport');
const usersController = require("../controllers/usersController");

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        next(); // User is admin, proceed to the next middleware
    } else {
        return res.status(403).json({ error: "Forbidden: You are not authorized to access this resource" });
    }
};

// Delete user route
router.delete("/rm/:userId", passport.authenticate('jwt-verify', { session: false }), isAdmin, usersController.deleteUser);

module.exports = router;

