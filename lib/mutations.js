'use strict'
const Course = require('../model/courses')

module.export = {
    async createCourse(_, { input }) {
        return await Course.create(input);
    },
}
