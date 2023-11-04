const cloudinary = require('cloudinary').v2

require('dotenv').config()

exports.cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    })
    console.log('cloudinary sucessfully connected')
  } catch (error) {
    console.log('watt lagayee in the cloudinary')
    res.json({
      message: 'cloudinary error',
    })
    console.log(error)
  }
}
