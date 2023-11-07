const express = require('express')

const router = express.Router()

const { signup } = require('../controller/signup')

const { login } = require('../controller/login')

router.post('/signup', signup)
router.post('/login', login)

module.exports = router
