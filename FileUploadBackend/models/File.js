const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
require('dotenv').config()

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
})

// post middleware

let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

fileSchema.post('save', async function (doc) {
  try {
    console.log('DOC', doc)
    let info = await transporter.sendMail({
      from: 'File Sharing App',
      to: doc.email,
      subject: 'NEW File Uploaded ON CLOUDINARY',
      text: 'Your file has been uploaded successfully',
      html: `<h2>Your file has been uploaded successfully at ${doc.imageUrl}</h2>`,
    })
    console.log(info)
  } catch (error) {
    console.log(error)
  }
})

module.exports = mongoose.model('File', fileSchema)
