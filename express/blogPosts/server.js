const express = require('express')

const dbConnect = require('./configure/database')

require('dotenv').config()

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())

const postRotues = require('./routes/post')
app.use('/api/v1', postRotues)

app.listen(PORT, () => {
  console.log('server connect sucessfully')
})

dbConnect()
