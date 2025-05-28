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
  try{
    const {email, password} = req.body
    
    // Validate email and password
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    // }else if (password.length < 6) {
    //   return res.status(400).json({ error: 'Password must be at least 6 characters long' })
    // }else if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(email)) {
    //   return res.status(400).json({ error: 'Invalid email format' })
    }else{
      const saltRound = 10
      const hashedPassword = await bcrypt.hash(password, saltRound) // Hash the password
      const result = await userModel.create_user(email, hashedPassword)
      res.status(201).json(result)
    }
  }catch(error){
    console.error('Error creating user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}