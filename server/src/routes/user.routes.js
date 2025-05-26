import * as userController from '../controllers/user.controller.js'
import express from 'express'

const router = express.Router()

// Get all users
router.get('/', userController.getUsers)

// Get a specific user by ID
router.get('/:id', userController.getUserById)

export default router