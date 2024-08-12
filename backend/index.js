const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bannerdb'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.get('/banner', (req, res) => {
  db.query('SELECT * FROM banner WHERE id = 1', (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

app.post('/banner', (req, res) => {
  const { description, timer, link, visible } = req.body;
  db.query('UPDATE banner SET description = ?, timer = ?, link = ?, visible = ? WHERE id = 1',
    [description, timer, link, visible], (err) => {
      if (err) throw err;
      res.json({ description, timer, link, visible });
    });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
