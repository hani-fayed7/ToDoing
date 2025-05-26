# ToDoing

A simple Todo application with a Node.js & Express.js backend and a client-side frontend. The backend uses PostgreSQL for data storage.

## Features

- RESTful API for managing todos and users (create, read, get by ID)
- PostgreSQL database integration
- Environment variable support with dotenv
- Modular code structure for scalability

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
│       ├── modules/
│       │   ├── todo.model.js
│       │   └── user.model.js
│       └── routes/
│           ├── index.js
│           ├── todo.routes.js
│           └── user.routes.js
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
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     username VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL
   );

   CREATE TABLE todos (
     id SERIAL PRIMARY KEY,
     user_id INTEGER REFERENCES users(id) NOT NULL,
     title VARCHAR(255) NOT NULL,
     description TEXT,
     created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
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
- `POST /api/todos` - Create a new todo (JSON body: `{ "user_id": ..., "title": "...", "description": "..." }`)

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a user by ID

## License

ISC

---
