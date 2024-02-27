// routes/users.js
const express = require("express");
const router = express.Router();
const passport = require('passport');
const usersController = require("../controllers/usersController");
const checkBan = require("../middleware/checkBan");

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        next(); // User is admin, proceed to the next middleware
    } else {
        return res.status(403).json({ error: "Forbidden: Only admins !" });
    }
};

// Delete user route
router.delete("/rm/:userId", passport.authenticate('jwt-verify', { session: false }), isAdmin, checkBan, usersController.deleteUser);

// Ban/unban user route
router.put("/ban/:userId", passport.authenticate('jwt-verify', { session: false }), isAdmin, checkBan, usersController.banUser);

//List users 
router.get("/list", passport.authenticate('jwt-verify', { session: false }), isAdmin, checkBan, usersController.getAllUsers);

// Make user admin route
router.put("/up/:userId", passport.authenticate('jwt-verify', { session: false }), isAdmin, checkBan, usersController.makeUserAdmin);

// Remove admin role from user route
router.put("/down/:userId", passport.authenticate('jwt-verify', { session: false }), isAdmin, checkBan, usersController.removeAdminRole);

module.exports = router;

