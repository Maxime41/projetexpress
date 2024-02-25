// heyRoutes.js
const express = require("express");
const router = express.Router();
const helloController = require("../controllers/helloController");

router.get("/test", helloController.sayHello);

module.exports = router;
