// src/server/index.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Ensure .env file is loaded

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL server');

  // Create database if it doesn't exist
  db.query('CREATE DATABASE IF NOT EXISTS DairySync', (err) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }
    console.log('Database created or already exists');

    // Use the database
    db.query('USE DairySync', (err) => {
      if (err) {
        console.error('Error selecting database:', err);
        return;
      }

      // Create users table if it doesn't exist
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          fName VARCHAR(255),
          lName VARCHAR(255),
          email VARCHAR(255) UNIQUE,
          password VARCHAR(255)
        );
      `;
      db.query(createTableQuery, (err) => {
        if (err) {
          console.error('Error creating table:', err);
          return;
        }
        console.log('Table created or already exists');
      });
    });
  });
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { fName, lName, email, password } = req.body;

  try {
    // Check if the email already exists
    const [existingUser] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      console.log('Signup failed: Email already exists');
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const sql = 'INSERT INTO users (fName, lName, email, password) VALUES (?, ?, ?, ?)';
    await db.promise().query(sql, [fName, lName, email, hashedPassword]);

    console.log('Signup successful for user:', email);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'Database error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch the user from the database
    const [userResult] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (userResult.length === 0) {
      console.log('Login failed: User not found');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = userResult[0];

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log('Login failed: Incorrect password');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Successful login
    console.log('Login successful for user:', user.email);
    res.status(200).json({ message: 'Login successful', user: { id: user.id, fName: user.fName, lName: user.lName, email: user.email } });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'Database error' });
  }
});

// Serve static files from the React app
app.use(express.static('build'));

// All other routes should serve the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
