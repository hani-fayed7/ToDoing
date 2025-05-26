import * as todoController from '../controllers/todo.controller.js'
import express from 'express'

const router = express.Router()

// Get all todos
router.get('/', todoController.getTodos)

// Get a specific todo by ID
router.get('/:id', todoController.getTodoById)

// Create a new todo
router.post('/', todoController.createTodo)

export default router