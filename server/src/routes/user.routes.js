import express from 'express'
import { checkSchema } from 'express-validator'
import * as userController from '../controllers/user.controller.js'
import * as userValidator from '../validators/user.validator.js'
import * as  validateRequest from '../middlewares/validation.middleware.js'

const router = express.Router()

// Get all users
router.get('/', userController.getUsers)

// Get a specific user by ID
router.get('/:id', userController.getUserById)

// Create a new user
router.post('/', checkSchema(userValidator.createUserValidatorSchema), validateRequest.handleValidationErrors, userController.createUser)

export default router