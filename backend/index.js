import express from "express";
import cors from "cors";
import "dotenv/config"
import todoRoutes from "./routes/todoRoutes.js";

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())

app.get("/", (req, res) => {
  res.json({ info: "This is the backend for a simple PERN todo app"})
})

// API Routes
app.use('/api/todos', todoRoutes)

app.listen(PORT, () => {
  console.log(`App successful running on port ${PORT}`)
})
