import pool from '../config/database.js'

// Function to get all todos
export async function getAllTodos() {
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