const { getPaths } = require('@redwoodjs/internal')

module.exports = {
  schema: getPaths().generated.schema,
  extensions: {
    endpoints: {
      default: {
        url: "http://localhost:8911/graphql",
      }
    }
  }
}
