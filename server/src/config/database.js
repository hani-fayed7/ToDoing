import { Pool } from 'pg'
import config from './config.js'

const { database } = config

// Create a new PostgreSQL connection pool
const pool = new Pool(database)

// Test connection
pool.connect()
  .then((client) => {
    console.log('PostgreSQL connected successfully');
    client.release();
  })
  .catch((err) => {
    console.error('Failed to connect to PostgreSQL:', err.stack);
  })

// Handle pool errors
pool.on('error', (err) => {
  console.error('Unexpected PostgreSQL pool error:', err);
});

export default pool

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