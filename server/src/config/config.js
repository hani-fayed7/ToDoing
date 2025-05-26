dotenv.config(); // Loads environment variables from .env

const config = {
  // Configuration settings for the application

  // 1. Database Configuration
  database: {
    host: process.env.DB_HOST, // Database host (e.g., localhost or a remote server)
    port: parseInt(process.env.DB_PORT), // Database port (default for PostgreSQL is 5432)
    user: process.env.DB_USER, // Database user
    password: process.env.DB_PASSWORD, // Database password
    database: process.env.DB_NAME // Database name
  },

  // 2. Server Configuration
  server: {
    port: parseInt(process.env.PORT) || 3000, // Port for the server to listen on
    env: process.env.NODE_ENV || 'development', // Environment (development, production, etc.)
  },

  // 3. Security Settings
  security: {
    jwtSecret: process.env.JWT_SECRET // Secret key for JWT authentication
  }

  // 4. API Configuration

  // 5. Logging Configuration

}
export default config; // Export the configuration object for use in other parts of the application