const express = require('express')

const app = express()

//middleware for data parsing
app.use(express.json())

require('dotenv').config()

const PORT = process.env.PORT || 4000

//import routes for todo api

const todoRoutes = require('./routes/todo')

//mount the todo API routes
app.use('/api/v1', todoRoutes)

//start server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})

const dbConnect = require('./config/database')
dbConnect()

app.get('/', (req, res) => {
  res.send(`<h1>This is the HOMEPAGE hero</h1>`)
})
