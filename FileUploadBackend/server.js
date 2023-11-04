const express = require('express')
const { dbConnect } = require('./config/database')
const { cloudinaryConnect } = require('./config/cloudinary')
const fileupload = require('express-fileupload')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(fileupload({ useTempFiles: true, tempFileDir: '/tmp/' }))

dbConnect()

cloudinaryConnect()

const Upload = require('./routes/file')

app.use('/api/v1/upload', Upload)

app.listen(PORT, () => {
  console.log('App is running at ' + PORT)
})
