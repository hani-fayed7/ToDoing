import mysql from 'mysql2'
import dotenv from 'dotenv'

// Load environment variables from .env file
// dotenv.config({path: '../.env'});
dotenv.config();

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_NAME
}).promise()

// Test the connection
export async function testDBConnection() {   
    const [result] = await pool.query('SELECT * FROM todo');
    return result;
}

// Test the select query with a parameter
export async function todo(id){
    const [result] = await pool.query(`
        SELECT * 
        FROM todo
        WHERE id = ?
        `, [id]);
    return result;
    
}

export async function create_todo(title, content){
    const [result] = await pool.query(`
        INSERT INTO todo (title, content)
        VALUES (?, ?)
        `, [title, content]);
    const id = result.insertId;
    return todo(id);
}

// console.log(await testDBConnection());