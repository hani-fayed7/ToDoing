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

// export async function create_todo(user_id, title, description) {
//     const result = await pool.query(`
//         INSERT INTO todos (user_id, title, description)
//         VALUES ($1, $2, $3)
//         RETURNING *
//     `, [user_id, title, description]);
//     const id = result.rows[0].id
//     return await todo(id)
// }