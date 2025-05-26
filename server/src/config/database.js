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