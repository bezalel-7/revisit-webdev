const Post = require('../models/Post')

exports.commentPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      res.status(404).json({
        message: 'no post found',
        success: false,
      })
    }
    post.Comments.push(req.body.comment)
    const response = await post.save()
    res.status(200).json({
      message: 'sucessfully commented',
      success: true,
      data: response,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'ledhu ra success kale',
      success: false,
    })
  }
}
