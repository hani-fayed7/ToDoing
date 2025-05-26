import * as userModel from '../modules/user.model.js'

// Get all users
export async function getUsers(req, res) {
  try {
    const users = await userModel.getAllUsers()
    res.status(200).json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// Get a specific user by ID
export async function getUserById(req, res) {
  const { id } = req.params
  try {
    const result = await userModel.user(id)
    if (!result) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json(result)
  } catch (error) {
    console.error('Error fetching user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}