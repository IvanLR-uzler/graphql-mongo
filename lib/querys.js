'use strict'
const Course = require('../model/courses')

module.exports = {
  getCourses: async () => {
    return await Course.find()
  },

  getCourse: async (_, { id }) => {
    return await Course.findById(id)
  }
}
