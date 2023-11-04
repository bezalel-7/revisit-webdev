const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

exports.commentController = async (req, res) => {
  try {
    const { post, user, body } = req.body
    const comment = new Comment({
      post,
      user,
      body,
    })

    const savedComment = await comment.save()

    //find post and then update

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: savedComment._id },
      },
      { new: true },
    )

    const comments = await Comment.find({ post: post })
    res.status(200).json({
      status: true,
      post: updatedPost,
      comments: comments,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: 'Error while creating comment',
    })
  }
}
