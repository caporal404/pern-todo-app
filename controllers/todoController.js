import pool from "../config/db.js"

const SQL_SELECT_TODOS = 'SELECT * FROM todos ORDER BY id ASC'
const SQL_SELECT_TODO = 'SELECT * FROM todos WHERE id=$1'
const SQL_INSERT_TODO = 'INSERT INTO todos (value, "isCompleted", is_editing) VALUES ($1, $2, $3) RETURNING *'
const SQL_UPDATE_TODO = 'UPDATE todos SET value=$1, "isCompleted"=$2, is_editing=$3 WHERE id=$4'
const SQL_DELETE_TODO = 'DELETE FROM todos WHERE id=$1'


export const getTodos = async (req, res) => {
  try {
    const results = await pool.query(SQL_SELECT_TODOS)

    res.status(200).json({ data: results.rows })

  } catch(error) {
    console.error(error.message)
    res.status(500).json({ error: "Internal server error" })
  }
}

export const getTodoById = async (req, res) => {
  const id = parseInt(req.params.id)

  try {
    const results = await pool.query(SQL_SELECT_TODO, [id])

    if(results.rows.length === 0) {
      return res.status(404).json({ error: `Todo not found` })
    }

    res.status(200).json({ data: results.rows })

  } catch(error) {
    console.error(error.message)
    res.status(500).json({ error: "Internal server error" })
  }
}

export const createTodo = async (req, res) => {
  const { value, isCompleted, is_editing } = req.body

  try {
    const results = await pool.query(SQL_INSERT_TODO, [value, isCompleted, is_editing || false])
    
    res.status(201).json({
      message: "Todo successfully added",
      data: results.rows[0]
    })

  } catch(error) {
    console.error(error.message)
    res.status(500).json({ error: "Internal server error" })
  }
}

export const updateTodo = async (req, res) => {
  const id = parseInt(req.params.id)
  const { value, isCompleted, is_editing } = req.body

  try {
    const results = await pool.query(SQL_UPDATE_TODO, [value, isCompleted, is_editing || false, id])
    
    if(results.rowCount === 0) {
      return res.status(404).json({ error: "Todo not found" })
    }
    
    res.status(200).json({ message: "Todo successfully edited" })

  } catch(error) {
    console.error(error.message)
    res.status(500).json({ error: "Internal server error" })
  }
}

export const deleteTodo = async (req, res) => {
  const id = parseInt(req.params.id)

  try {
    const results = await pool.query(SQL_DELETE_TODO, [id])

    if(results.rowCount === 0) {
      return res.status(404).json({ error: "Todo not found" })
    }

    res.status(200).json({ message: "Todo successfully deleted" })
    
  } catch(error) {
    console.error(error.message)
    res.status(500).json({ error: "Internal server error" })
  }
}