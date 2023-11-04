const Post = require('../models/postModel')

exports.createPost = async (req, res) => {
  try {
    const { title, user, body } = req.body

    const post = new Post({
      title,
      user,
      body,
    })

    const uploadedPost = await post.save()
    res.status(200).json({
      message: 'post updated success',
      post: uploadedPost,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'error agaya bhai VD',
    })
  }
}
