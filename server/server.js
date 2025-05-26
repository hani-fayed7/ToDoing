import app from './src/app.js'
import config from './src/config/config.js'

const {server } = config

app.listen(server.port, () => {
  console.log(`Server running in ${server.env} mode on port ${server.port}`)
})