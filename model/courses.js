const mongoose = require('mongoose')
const { Schema } = mongoose

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  teacher: String,
  description: {
    type: String,
    required: true
  },
  topic: String
})

module.exports = mongoose.model('Course', courseSchema)
