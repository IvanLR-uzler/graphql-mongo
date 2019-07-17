'use strict'
const mongoose = require('mongoose');

async function connect() {
  try {
      await mongoose.connect('mongodb://localhost/graphql',{
  useNewUrlParser: true
})
console.log('db connected');
  } catch {
     console.log("db connected fail");
  }
}

module.exports = connect();