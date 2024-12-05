// userController.js

const User = require('../models/User');  // Import a model, e.g., for interacting with the database

// Function to get all users
exports.getAllUsers = (req, res) => {
  User.findAll()  // Query the database for all users
    .then(users => {
      res.json(users);  // Send the users as JSON response
    })
    .catch(error => {
      res.status(500).json({ message: 'Error fetching users', error });
    });
};

// Function to get a specific user by ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;  // Get user ID from URL parameters
  User.findById(userId)  // Query the database for the user by ID
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);  // Send the user as JSON response
    })
    .catch(error => {
      res.status(500).json({ message: 'Error fetching user', error });
    });
};
