import pg from 'pg'
import dotenv from 'dotenv'
const { Pool } = pg

// Load environment variables from .env file
dotenv.config()

// Create a new PostgreSQL connection pool
const pool = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_NAME
})

// Test the connection
export async function testDBConnection() {   
    const result = await pool.query('SELECT * FROM todos')
    return result.rows
}

// Test the select query with a parameter
export async function todo(id){
    const result = await pool.query(`
        SELECT * 
        FROM todos
        WHERE id = $1
        `, [id]);
    return result.rows[0]
    
}

export async function create_todo(user_id, title, description) {
    const result = await pool.query(`
        INSERT INTO todos (user_id, title, description)
        VALUES ($1, $2, $3)
        RETURNING *
    `, [user_id, title, description]);
    const id = result.rows[0].id
    return await todo(id)
}