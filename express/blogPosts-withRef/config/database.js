const mongoose = require('mongoose')

require('dotenv').config

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('successfully connected to the database'))
    .catch((error) => console.log(error))
}

module.exports = dbConnect
