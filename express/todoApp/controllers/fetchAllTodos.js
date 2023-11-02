const Todo = require('../models/Todo')

exports.fetchAllTodos = async (req, res) => {
  try {
    const response = await Todo.find()
    res.status(200).json({
      success: true,
      data: response,
      message: 'Fetched all todos successfully',
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again',
    })
  }
}
