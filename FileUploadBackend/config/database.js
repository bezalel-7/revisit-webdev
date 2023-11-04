const mongoose = require('mongoose')

require('dotenv').config()

exports.dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log('database sucessfully connected')
    })
    .catch((error) => {
      console.log(error)
      process.exit(1)
    })
}
