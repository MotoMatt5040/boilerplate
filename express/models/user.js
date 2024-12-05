const { Client } = require('pg');

// Create a new PostgreSQL client
const client = new Client({
  connectionString: 'postgresql://postgres:new_password@localhost:5432/myprojectdb',
});

client.connect();  // Connect to the database

// Define a method to fetch all users
const getAllUsers = async () => {
  try {
    const result = await client.query('SELECT * FROM users');
    return result.rows;  // Return the rows of users
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Error fetching users');
  }
};

// Define a method to find a user by ID
const getUserById = async (id) => {
  try {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];  // Return the first matching row
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw new Error('Error fetching user by ID');
  }
};

module.exports = { getAllUsers, getUserById };  // Export methods for use in controllers
