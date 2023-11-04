const express = require('express')

require('dotenv').config()

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())

const dbConnect = require('./config/database')

dbConnect()

const post = require('./routes/post')

app.use('/api/v1', post)

app.listen(PORT, () => {
  console.log(`connected to the ${PORT} sucessfully`)
})
