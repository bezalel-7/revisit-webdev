const Post = require('../models/Post')

exports.likePost = async (req, res) => {
  try {
    // Find the post by its ID
    const post = await Post.findById(req.params.id)

    // Check if the post was found
    if (!post) {
      return res.status(404).json({
        message: 'Post not found',
        success: false,
      })
    }

    // Increment the 'like' count of the post
    post.like += 1

    // Save the updated post
    const response = await post.save()

    res.status(200).json({
      message: 'Successfully liked the post',
      success: true,
      data: response,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Failed to like the post',
      success: false,
    })
  }
}
