import * as todoModel from'../modules/todo.model.js'

import express from 'express'
const app = express()
app.use(express.json())

// Get all todos
export const getTodos = async (req, res) => {
  try {
    const result = await todoModel.getAllTodos()
    res.send(result.rows)
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch todos' })
  }
}

// Get a specific todo by ID
export const getTodoById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await todoModel.todo(id)
    if (result.rows.length === 0) {
      return res.status(404).send({ error: 'Todo not found' })
    }
    res.send(result.rows[0])
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch todo' })
  }
}

// Create a new todo
export const createTodo = async (req, res) => {
  const { user_id, title, description } = req.body
  try {
    const result = await todoModel.create_todo(user_id, title, description)
    res.status(201).send(result.rows[0])
  } catch (err) {
    res.status(500).send({ error: 'Failed to create todo' })
  }
}