import * as userModel from '../modules/user.model.js'

// Get all users
export const getUsers = async (req, res) => {
  try {
    const result = await userModel.getAllUsers()
    res.send(result.rows)
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch users' })
  }
}

// Get a specific user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await userModel.user(id)
    if (!result) {
      return res.status(404).send({ error: 'User not found' })
    }
    res.send(result)
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch user' })
  }
}