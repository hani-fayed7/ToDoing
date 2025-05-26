import express from 'express'
import todoRoutes from './todo.routes.js'
import userRoutes from './user.routes.js'

const router = express.Router()

// Mount the todo routes
router.use('/api/todos', todoRoutes)

// Mount the user routes
router.use('/api/users', userRoutes)

// Export the router
export default router