const db = require('../models/db');

// Get all contacts
exports.getContacts = (req, res) => {
  db.query('SELECT * FROM contacts', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Add contact
exports.createContact = (req, res) => {
  const { name, email, phone } = req.body;
  const sql = 'INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)';
  db.query(sql, [name, email, phone], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, name, email, phone });
  });
};

// Delete contact
exports.deleteContact = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM contacts WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Contact deleted' });
  });
};