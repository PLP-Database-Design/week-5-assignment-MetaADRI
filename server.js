// Load environment variables
require('dotenv').config();

// Import necessary modules
const express = require('express');
const mysql = require('mysql2');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Database connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test database connection
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello! The server is running.');
});

// Set up the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
