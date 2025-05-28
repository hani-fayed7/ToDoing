import express from 'express'
import {checkSchema} from 'express-validator'
import * as todoController from '../controllers/todo.controller.js'
import * as todoValidator from '../validators/todo.validator.js'
import * as  validateRequest from '../middlewares/validation.middleware.js'

const router = express.Router()

// Get all todos
router.get('/', todoController.getTodos)

// Get a specific todo by ID
router.get('/:id', todoController.getTodoById)

// Create a new todo
router.post('/', checkSchema(todoValidator.createTodoValidatorSchema), validateRequest.handleValidationErrors, todoController.createTodo)

export default router