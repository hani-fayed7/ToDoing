import pool from '../config/database.js'



// Function to get all users
export async function getAllUsers() {
    const result = await pool.query('SELECT * FROM users')
    return result.rows
}

// Test the select query with a parameter
export async function user(id){
    const result = await pool.query(`
        SELECT * 
        FROM users
        WHERE id = $1
        `, [id]);
    return result.rows[0]
    
}

// Function to create a new user
export async function create_user(email, password) {
    const result = await pool.query(`
        INSERT INTO users (email, password)
        VALUES ($1, $2)
        RETURNING *
    `, [email, password]);
    const id = result.rows[0].id
    return await user(id)
}