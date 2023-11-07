const express = require('express')

const app = express()

require('dotenv').config()

app.use(express.json())

const dbConnect = require('./config/database')

dbConnect()

const authRoutes = require('./routes/auth')

app.use('/api/v1', authRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
