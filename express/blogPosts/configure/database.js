const mongoose = require('mongoose')

require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL

const dbConnect = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log('sucessfully connected to database'))
    .catch((error) => {
      console.log(error)
      process.exit(1)
    })
}

module.exports = dbConnect
