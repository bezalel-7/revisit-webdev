const Post = require('../models/postModel')

const Like = require('../models/likeModel')

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body
    const like = new Like({
      post,
      user,
    })

    const likedPost = await like.save()

    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: likedPost._id },
      { new: true },
    )
    res.status(200).json({
      message: 'success',
      data: updatePost,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'failure',
    })
  }
}

exports.unLikePost = async (req, res) => {
  try {
    const { post, like } = req.body

    if (!(post || like)) res.status(404).json({ message: 'failure' })

    const unLikedPost = await Like.findByIdAndDelete(like)

    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $pull: unLikedPost._id },
      { new: true },
    )
    res.status(200).json({
      message: 'success',
      data: unLikedPost,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'failure',
    })
  }
}
