const mongoose = require('mongoose')

const Post = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxLength: 50,
  },
  desc: {
    type: String,
    required: true,
    maxLength: 50,
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  UpdatedOn: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  like: {
    type: Number,
    default: Number(0),
  },
  Comments: {
    type: Array,
    default: [],
  },
})

module.exports = mongoose.model('Post', Post)
