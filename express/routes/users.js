const express = require('express');
const router = express.Router();

const logger = require('../middlewares/logger');
router.use(logger);

const userController = require('../controllers/userController');  // Import the controller

// Define the routes and associate them with controller methods
router.get('/', userController.getAllUsers);  // Get all users
router.get('/:id', userController.getUserById);  // Get a user by ID

module.exports = router;  // Export the router to use in the main app
