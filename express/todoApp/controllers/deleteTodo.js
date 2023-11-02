const Todo = require('../models/Todo')

exports.deleteTodo = async (req, res) => {
  try {
    const response = await Todo.deleteOne({ _id: req.params.id })
    res.status(200).json({
      success: true,
      message: 'deleted data successfully',
    })
  } catch (error) {
    res.status(500).json({
      message: 'ledhu ra bhai ah id',
      success: false,
    })
  }
}
