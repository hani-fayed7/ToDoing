import mysql from 'mysql2';
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    password: 'MySQL@root',
    database: 'todoing_app',
}).promise()
