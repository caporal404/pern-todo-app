import express from "express";
import "dotenv/config"
import * as db from "./queries.js";

const app = express()
const port = process.env.APP_PORT

app.get("/", (req, res) => {
  res.json({ info: "This is the backend for a simple todo app with Node.js, Express and PostgreSQL"})
})

app.get('/api/todos', db.getTodos)
app.get('/api/todos/:id', db.getTodoById)
app.post('/api/todos', db.createTodo)
app.patch('/api/todos/:id', db.updateTodo)
app.delete('/api/todos/:id', db.deleteTodo)

app.listen(port, () => {
  console.log(`App successful running on port ${port}`)
})
