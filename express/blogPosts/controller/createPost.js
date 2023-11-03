const Post = require('../models/Post')

exports.createPost = async (req, res) => {
  try {
    const response = await Post.create({
      username: req.body.username,
      desc: req.body.desc,
    })
    res.status(200).json({
      success: true,
      message: 'created data successfully',
      data: response,
    })
    return res
  } catch (error) {
    res.status(500).json({
      message: 'ledhu ra success kale',
      success: false,
    })
    console.log(error)
    return res
  }
}
