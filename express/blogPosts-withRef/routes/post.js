const express = require('express')

const router = express.Router()

const { commentController } = require('../controller/commentController')

const { createPost } = require('../controller/postController')

const { likePost, unLikePost } = require('../controller/likeController')

router.post('/comments/create', commentController)
router.post('/post/create', createPost)
router.post('/likes/like', likePost)
router.post('/likes/unlike', unLikePost)

module.exports = router
