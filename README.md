# ToDoing

A simple Todo application with a Node.js & Express.js backend and a client-side frontend. The backend uses PostgreSQL for data storage.

## Project Status

This project is currently under active development.

## Features

- RESTful API for managing todos and users (create, read, get by ID)
- Input validation using express-validator
- PostgreSQL database integration
- Environment variable support with dotenv
- Modular code structure for scalability and maintainability
- Error handling middleware for validation and server errors
- Easy project setup and clear API documentation

## Project Structure

```
.
├── client/
│   └── public/
│       ├── index.html
│       ├── scripts.js
│       └── styles.css
├── server/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── config/
│       │   ├── config.js
│       │   └── database.js
│       ├── controllers/
│       │   ├── todo.controller.js
│       │   └── user.controller.js
|       |── middlewares/
|       |   └── validation.middleware.js
│       ├── modules/
│       │   ├── todo.model.js
│       │   └── user.model.js
│       |── routes/
│       |   ├── index.js
│       |   ├── todo.routes.js
│       |   └── user.routes.js
|       └── validators/
│           ├── todo.validator.js
|           └── user.validator.js
├── .gitignore
├── .gitattributes
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- PostgreSQL server

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/hani-fayed7/ToDoing.git
   cd ToDoing/server
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the `server/` directory with the following content:

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_postgres_user
   DB_PASSWORD=your_postgres_password
   DB_NAME=todoing_app
   PORT=3000
   NODE_ENV=development
   # JWT_SECRET=your_jwt_secret_key
   ```

4. **Set up the database:**

   Create the required tables in your PostgreSQL database:

   ```sql
   -- Create users table
   CREATE TABLE IF NOT EXISTS users (
       id SERIAL PRIMARY KEY,
       email VARCHAR(255) UNIQUE NOT NULL,
       password TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   
   -- Create todos table
   CREATE TABLE IF NOT EXISTS todos (
       id SERIAL PRIMARY KEY,
       user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
       title VARCHAR(255) NOT NULL,
       description TEXT,
       is_done BOOLEAN DEFAULT FALSE,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. **Start the server:**

   ```sh
   npm run dev
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### Todos

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a todo by ID
- `POST /api/todos` - Create a new todo  
  **Request body:**  
  ```json
  {
    "user_id": 1,
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs"
  }
  ```
  - **Validation:**  
    - `user_id` must be a valid user ID and not empty  
    - `title` must be a non-empty string  
    - `description` is optional

### Users


- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a user by ID
- `POST /api/users` - Create a new user  
  **Request body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "StrongPassword123!"
  }
  ```
  - **Validation:**  
    - Email must be valid and not empty  
    - Password must be at least 6 characters and contain uppercase, lowercase, number, and special character

## License

ISC

---
