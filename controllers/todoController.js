import pool from "../db.js"

const SQL_SELECT_TODOS = 'SELECT * FROM todos ORDER BY id ASC'
const SQL_SELECT_TODO = 'SELECT * FROM todos WHERE id=$1'
const SQL_INSERT_TODO = 'INSERT INTO todos (value, is_completed, is_editing) VALUES ($1, $2, $3) RETURNING *'
const SQL_UPDATE_TODO = 'UPDATE todos SET value=$1, is_completed=$2, is_editing=$3 WHERE id=$4'
const SQL_DELETE_TODO = 'DELETE FROM todos WHERE id=$1'


export const getTodos = async (req, res) => {
  try {
    const results = await pool.query(SQL_SELECT_TODOS)
    res.status(200).json(results.rows)
  } catch(error) {
    throw error
  }
}

export const getTodoById = async (req, res) => {
  const id = parseInt(req.params.id)

  try {
    const results = await pool.query(SQL_SELECT_TODO, [id])
    res.status(200).json(results.rows)
  } catch(error) {
    throw error
  }
}

export const createTodo = async (req, res) => {
  const { value, isCompleted, isEditing } = req.body

  try {
    const results = await pool.query(SQL_INSERT_TODO, [value, isCompleted, isEditing])
    res.status(201).send(`Todo added with ID: ${results.rows[0].id}`)
  } catch(error) {
    throw error
  }
}

export const updateTodo = async (req, res) => {
  const id = parseInt(req.params.id)
  const { value, isCompleted, isEditing } = req.body

  try {
    const results = await pool.query(SQL_UPDATE_TODO, [value, isCompleted, isEditing, id])
    res.status(200).send(`Todo edited with ID: ${id}`)
  } catch(error) {
    throw error
  }
}

export const deleteTodo = async (req, res) => {
  const id = parseInt(req.params.id)

  try {
    const results = await pool.query(SQL_DELETE_TODO, [id])
    res.status(200).send(`Todo deleted with ID: ${id}`)
  } catch(error) {
    throw error
  }
}