'use strict'
require('dotenv').config
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const expressQGL = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')
require('./lib/database')

const app = express()
const port = process.env.port || 1496
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'),
  'utf-8')

// definiendo el esquema
const schema = makeExecutableSchema({ typeDefs, resolvers })

// configurar los resolvers

app.use('/api', expressQGL({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server on port: http://localhost:${port}/api`)
})
