import express from "express";
import "dotenv/config"

const app = express()
const port = process.env.APP_PORT

app.get("/", (req, res) => {
  res.json({ info: "This is the backend for a simple todo app with Node.js, Express and PostgreSQL"})
})

app.listen(port, () => {
  console.log(`App successful running on port ${port}`)
})
