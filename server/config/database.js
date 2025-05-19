import mysql from 'mysql2'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config({path: '../../.env'});


// Create a connection pool
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_NAME
}).promise()

// Test the connection
async function testDBConnection() {   
    const [result] = await pool.query('SELECT * FROM todo');
    console.log(result);
}

testDBConnection()