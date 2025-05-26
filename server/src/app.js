import express from 'express'
import * as todo_db from'./modules/todo.model.js'

const app = express()
app.use(express.json())

// Get all todos
app.get("/todo", async (req, res) => {
    const todos = await todo_db.getAllTodos()
    res.send(todos)
});

// Get a specific todo by ID
app.get("/todo/:id", async (req, res) => {
    const id = req.params.id
    const todos = await todo_db.todo(id)
    res.send(todos)
});

// Create a new todo
app.post("/todo", async (req, res) => {
    const {user_id, title, description} = req.body
    const createTodo = await todo_db.create_todo(user_id, title, description)
    res.status(201).send(createTodo)
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

// Export the app for use in server/server.js
export default app