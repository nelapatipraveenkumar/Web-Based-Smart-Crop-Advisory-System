const mysql = require('mysql2');
require('dotenv').config();

// Create connection without database selected to create it if missing
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

connection.connect((err) => {
    if (err) {
        console.error('CONNECTION FAILED:', err.message);
        process.exit(1);
    }
    console.log('CONNECTED to MySQL server successfully.');

    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err, result) => {
        if (err) {
            console.error('FAILED to create database:', err.message);
            process.exit(1);
        }
        console.log(`Database '${process.env.DB_NAME}' created or checks out.`);
        process.exit(0);
    });
});
