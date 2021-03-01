import 'dotenv/config'
import { ApolloServer } from 'apollo-server-express'

import schema from 'schema'
import resolvers from 'resolvers'
import { models, sequelize } from 'models'

/*
 * GraphQL
 * Used internally by the front-end admin application
 */
export const graphql = async (httpServer, app) => {
  const { GRAPHQL_ROUTE } = global.config

  const server = new ApolloServer({
    introspection: true,
    playground: true,
    typeDefs: schema,
    resolvers,
    formatError: (error) => {
      const message = error.message
        .replace('SequelizeValidationError: ', '')
        .replace('Validation error: ', '')
      return { ...error, message }
    },
    context: ({ req, connection }) => {
      if (connection) return { models }
      if (req) return { models, secret: process.env.SECRET }
    }
  })

  server.applyMiddleware({ app, path: GRAPHQL_ROUTE })
  server.installSubscriptionHandlers(httpServer)
  await sequelize.sync({ force: false })
}
