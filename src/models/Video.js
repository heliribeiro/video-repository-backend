const mongoose = require('mongoose')

const Schema = mongoose.Schema

const video = new Schema({
  name: {
    type: String,
    required: true,
  },
  urlImage: {
    type: String,
    required: true,
  },
  urlVideo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
})

module.exports = mongoose.model('Video', video);