const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// REMOVE NODEMAILER CODE HERE

// Handle contact form submission (Database Only)
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const contact = new Contact({ name, email, subject, message });

  try {
    await contact.save();
    res.status(201).json({ message: 'Saved to database', success: true });
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Database error', success: false });
  }
});

module.exports = router;