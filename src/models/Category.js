const mongoose = require('mongoose')

const Schema = mongoose.Schema

const category = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }]
})

module.exports = mongoose.model('Category', category);