// import the model

const Todo = require('../models/Todo')

// create a function to handle the request

exports.createTodo = async (req, res) => {
  try {
    //extract title and desc from request of body
    const { title, desc } = req.body
    // create a new todo object
    const response = await Todo.create({
      title,
      desc,
    })
    res.status(200).json({
      success: true,
      data: response,
      message: 'Todo created successfully',
    })
    return res
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again',
    })
    return res
  }
}
