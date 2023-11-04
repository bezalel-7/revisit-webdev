const File = require('../models/File')
const cloudinary = require('cloudinary').v2
//local file upload

exports.localFileUpload = async (req, res) => {
  try {
    const file = req.files.file

    const extension = file.name.split('.')[1]

    console.log('File =>', file)

    let path = __dirname + '/files/' + Date.now() + '.' + extension
    console.log('PATH =>', path)

    file.mv(path, (err) => {
      console.log(err)
    })
    res.json({
      message: 'File Uploaded locally Successfully',
    })
  } catch (error) {
    console.log(error)
  }
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder }
  options.resource_type = 'auto'
  if (quality) options.quality = quality
  console.log(options)
  return await cloudinary.uploader.upload(file.tempFilePath, options)
}

exports.imageUpload = async (req, res) => {
  try {
    const file = req.files.imageFile

    const { name, tags, email } = req.body
    console.log(name, tags, email)
    console.log('File =>', file)
    //validation
    if (!file) {
      return res.status(400).json({ msg: 'No file uploaded' })
    }
    const supportedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']

    if (!supportedFileTypes.includes(file.mimetype)) {
      return res.status(400).json({ msg: 'File type not supported' })
    }

    //file upload to cloudinary
    console.log('error at cloudinary')

    const response = await uploadFileToCloudinary(file, 'FileUpload')

    //db entry
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    })

    fileData.save()

    res.json({
      message: 'File Uploaded Successfully',
      imageUrl: response.secure_url,
      data: fileData,
    })

    console.log('File =>', file)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Server Error' })
  }
}

exports.videoUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body
    console.log(name, tags, email)
    const file = req.files.videoFile
    console.log('File =>', file)

    //validation
    if (!file) {
      return res.status(400).json({ msg: 'No file uploaded' })
    }

    const supportedFileTypes = ['video/mp4', 'video/avi', 'video/mov']

    if (!supportedFileTypes.includes(file.mimetype)) {
      return res.status(400).json({ msg: 'File type not supported' })
    }

    if (file.size > 10000000) {
      return res.status(400).json({ msg: 'File size too large' })
    }

    //file upload to cloudinary

    const response = await uploadFileToCloudinary(file, 'FileUpload', 30)

    //db entry

    const videoUrl = response.secure_url

    const video = await File.create({
      name,
      tags,
      email,
      imageUrl: videoUrl,
    })
    await video.save()
    res.status(200).json({
      message: 'File Uploaded Successfully',
      data: video,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Server Error' })
  }
}

exports.imageSizeReducer = async (req, res) => {
  try {
    const file = req.files.imageFile

    const { name, tags, email } = req.body
    console.log(name, tags, email)
    console.log('File =>', file)
    //validation
    if (!file) {
      return res.status(400).json({ msg: 'No file uploaded' })
    }
    const supportedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']

    if (!supportedFileTypes.includes(file.mimetype)) {
      return res.status(400).json({ msg: 'File type not supported' })
    }

    //file upload to cloudinary
    console.log('error at cloudinary')

    const response = await uploadFileToCloudinary(file, 'FileUpload', 30)

    //db entry
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    })

    fileData.save()

    res.json({
      message: 'File Uploaded Successfully',
      imageUrl: response.secure_url,
      data: fileData,
    })

    console.log('File =>', file)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Server Error' })
  }
}
