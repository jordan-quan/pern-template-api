import newrelic from 'newrelic'
import http from 'http'
import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import session from 'express-session'

import config from 'config'

export const app = express()

  /*
   * Self-executing setup function
   * Uses async to resolve env information
   */
  ; (async () => {
    global.config = await config()
    const { graphql } = await import('graphql')
    const { rest } = await import('rest')
    const { PORT, ENV, GRAPHQL_ROUTE, OAUTH_CLIENT_SECRET } = global.config

    const httpServer = http.createServer(app)

    app.set('port', PORT)
    app.use(cors())
    if (!!OAUTH_CLIENT_SECRET) {
      app.use(
        session({
          secret: OAUTH_CLIENT_SECRET,
          resave: true,
          saveUninitialized: true
        })
      )
    }

    rest(app) // for the RESTful API
    graphql(httpServer, app) // for GraphQL

    httpServer.listen({ port: PORT }, () => {
      console.log(
        `Server running!\
        \n  Environment: ${ENV}\
        \n  Port: ${PORT}\
        \n  GQL route: ${GRAPHQL_ROUTE}`
      )
    })
  })()
