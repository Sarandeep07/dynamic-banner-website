const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const connection = require('./db'); // Import the database connection

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Fetch the latest banner data
app.get('/banner', (req, res) => {
    const sql = 'SELECT * FROM banner ORDER BY id DESC LIMIT 1';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching banner data:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(results[0]);
    });
});

// Insert new banner data
app.post('/banner', (req, res) => {
    const { description, timer, link, visible } = req.body;
    const sql = 'INSERT INTO banner (description, timer, link, visible) VALUES (?, ?, ?, ?)';

    connection.query(sql, [description, timer, link, visible], (err, results) => {
        if (err) {
            console.error('Error inserting banner data:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json({ id: results.insertId, ...req.body });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${3306}`);
});
