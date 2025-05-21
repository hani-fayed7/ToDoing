# ToDoing

A simple Todo application with a Node.js & Express.js backend and a client-side frontend.

## Features

- RESTful API for managing todos (create, read, get by ID)
- MySQL database integration
- Environment variable support with dotenv

## Project Structure

```
.
├── client/
│   └── public/
│       ├── index.html
│       ├── scripts.js
│       └── styles.css
├── server/
│   ├── node_modules/...
│   ├── app.js
│   ├── server.js
|   |── package-lock.json
│   ├── package.json
│   ├── .env
│   └── config/
│       └── database.js
├── .gitignore
├── .gitattributes
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MySQL server

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
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_USER=your_mysql_user
   MYSQL_PASSWORD=your_mysql_password
   MYSQL_NAME=your_database_name
   ```

4. **Set up the database:**

   Create a `todo` table in your MySQL database:
   ```sql
   CREATE TABLE hani(
     id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
     title VARCHAR(255) NOT NULL,
     content TEXT NOT NULL,
     created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL 
   );
   ```

5. **Start the server:**
   ```sh
   npm run dev
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

- `GET /todo` - Get all todos
- `GET /todo/:id` - Get a todo by ID
- `POST /todo` - Create a new todo (JSON body: `{ "title": "...", "content": "..." }`)

## License

ISC

---
