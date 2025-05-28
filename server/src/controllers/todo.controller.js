import * as todoModel from'../models/todo.model.js'

// Get all todos
export async function getTodos(req, res) {
    try {
        const todos = await todoModel.getAllTodos();
        res.status(200).json(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Get a specific todo by ID
export async function getTodoById(req, res) {
  const { id } = req.params
  try {
    const result = await todoModel.todo(id)
    if (!result) {
      return res.status(404).json({ error: 'Todo not found' })
    }
    res.status(200).json(result)
  } catch (error) {
    console.error('Error fetching todo:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// Create a new todo
export async function createTodo(req, res) {
  const { user_id, title, description } = req.body
  try {
    const result = await todoModel.create_todo(user_id, title, description)
    res.status(201).json(result)
  } catch (error) {
    console.error('Error creating todo:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}