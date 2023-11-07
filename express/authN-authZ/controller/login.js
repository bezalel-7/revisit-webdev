const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' })
    }

    const user = await User.findOne({ email: email })

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    //verfiy password

    const payLoad = {
      email: user.email,
      role: user.role,
      id: user._id,
    }
    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign(payLoad, process.env.JWT_SECRET, {
        expiresIn: '2h',
      })
      user = user.toObject()
      user.token = token
      user.password = undefined
      const options = { httpOnly: true, expiresIn: 2 * 60 * 60 * 1000 }

      return res.cookie('jwt', token, options).json({
        message: 'User logged in successfully',
        success: true,
        token,
        user,
      })
      console.log('token', token)
    } else {
      return res.status(401).json({ message: 'Incorrect password' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
