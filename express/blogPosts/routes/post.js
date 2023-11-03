const express = require('express')

const router = express.Router()

const { createPost } = require('../controller/createPost')
const { likePost } = require('../controller/likePost')
const { commentPost } = require('../controller/commentPost')

router.post('/createPost', createPost)
router.put('/react/like/:id', likePost)
router.put('/react/comment/:id', commentPost)

module.exports = router
