const User = require('../models/user')
const bcrypt = require('bcrypt')
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body

    //validation`

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please fill all fields' })
    }

    const uName = await User.findOne({ username: username })

    if (uName) {
      return res.status(400).json({ message: 'Username already exists' })
    }

    const eMail = await User.findOne({ email: email })

    if (eMail) {
      return res.status(400).json({ message: 'Email already used' })
    }

    //hash password

    const hashPassword = await bcrypt.hash(password, 10)
    console.log('hashPassword', hashPassword)

    //create new user

    const user = await User.create({
      username,
      email,
      password: hashPassword,
    })

    const saveUser = await user.save()
    console.log('saveUser', saveUser)
    res.status(201).json({ message: 'User created' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
