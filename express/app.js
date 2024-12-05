require('dotenv').config();
const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/users');

app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/users', userRoutes);

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'myprojectdb',
  password: 'new_password',
  port: 5432,
});

pool.query('SELECT * FROM users')
  .then((res) => console.log(res.rows))
  .catch((err) => console.error('Query error', err.stack))
  .finally(() => pool.end());  // Close all connections in the pool
// Define a route
app.get('/', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    // res.send('Hello, World!,');
    res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});

// Set the port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
