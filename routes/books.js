// Example route in routes/books.js or directly in app.js

const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Adjust the path as needed

// Get all books
router.get('/books', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM books');
    res.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Database error' });
  }
});

module.exports = router;
