import * as userModel from '../models/user.model.js'
import bcrypt from 'bcrypt'

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

// Create a new user  
export async function createUser(req, res){
  const {email, password} = req.body
  try{
    const saltRound = 10
    const hashedPassword = await bcrypt.hash(password, saltRound) // Hash the password
    const result = await userModel.create_user(email, hashedPassword)
    res.status(201).json(result)
  }catch(error){
    if (error.code === '23505') { // Unique violation error code
          return res.status(409).json({ error: 'User already exists!' })
    }
    console.error('Error creating user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}