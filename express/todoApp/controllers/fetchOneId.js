const Todo = require('../models/Todo')

exports.fetchOneid = async (req, res) => {
  try {
    const response = await Todo.find({ _id: req.params.id })
    if (response.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No data found',
      })
    }
    res.status(200).json({
      success: true,
      data: response,
      message: 'fetched data successfully',
    })
  } catch (error) {
    res.status(500).json({
      message: 'ledhu ra bhai ah id',
      success: false,
    })
  }
}
