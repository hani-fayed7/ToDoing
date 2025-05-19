import mysql from 'mysql2';
const pool = mysql.createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'MySQL@root',
    database: 'todoing_app',
}).promise()

async function testDBConnection() {   
    const [result] = await pool.query('SELECT * FROM todo');
    console.log(result);
}

testDBConnection()