import express from 'express'
import router from './routes/index.js'

const app = express()
app.use(express.json())

// Mount the todo routes
router.use('/', router)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
})

// Export the app for use in server/server.js
export default app