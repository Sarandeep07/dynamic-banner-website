const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'BT1000097226:3306',  // your database host, usually localhost
    user: 'root',       // your MySQL username
    password: 'Gudu1097##', // your MySQL password
    database: 'bannerdb' // your database name
   
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;
