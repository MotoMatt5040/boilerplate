const express = require('express');
const router = express.Router();

const logger = require('../middlewares/logger');
router.use(logger);

// Define user-related routes
router.get('/', (req, res) => {
  res.send('List of admin users');
});

router.get('/:id', (req, res) => {
  res.send(`Details of admin user with ID ${req.params.id}`);
});

router.post('/', (req, res) => {
  // Logic to create a new user
  res.send('User created');
});

module.exports = router;  // Export the router to use in app.js
