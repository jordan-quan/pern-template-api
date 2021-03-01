import { oauth2router, utilsRouter } from 'modules'
import morgan from 'morgan'
import googleStrategy from 'passport-google-oauth20'
import passport from 'passport'

import { version } from '../package.json'

/*
 * RESTful API
 * Supports public route and hob endpoints
 * Supports admin UI HOB status endpoints
 */
export const rest = (app) => {
  const { ENV, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_CALLBACK_URL } = global.config

  if (!!OAUTH_CLIENT_ID) {
    const { Strategy } = googleStrategy.Strategy

    passport.use(
      new Strategy(
        {
          clientID: OAUTH_CLIENT_ID,
          clientSecret: OAUTH_CLIENT_SECRET,
          callbackURL: OAUTH_CALLBACK_URL
        },
        (accessToken, refreshToken, profile, cb) => cb(null, profile)
      )
    )

    app.use(passport.initialize())
    app.use(passport.session())
  }

  app.use(morgan('combined', { skip: (req) => req.url === '/version' }))
  app.use('/login', oauth2router)
  app.use('/utils', utilsRouter)
  app.get('/version', (req, res) => res.send(`Running ${version} in the ${ENV} environment`))
}
