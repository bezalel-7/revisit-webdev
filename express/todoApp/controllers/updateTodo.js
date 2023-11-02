const Todo = require('../models/Todo')

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const { title, desc } = req.body
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, desc, updatedAt: Date.now() },
    )
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data sucessfully updated`,
    })
  } catch (error) {
    res.status(500).json({
      message: error,
      success: false,
    })
  }
}
