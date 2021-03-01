import express from 'express'
import passport from 'passport'

import { isValidUser } from './isValidUser'

const router = express.Router()

passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))
const authenticator = passport.authenticate('google', { scope: ['profile', 'email'] })

router.get('/', authenticator)
router.get('/callback', authenticator, (req, res) => {
  if (isValidUser(req.user?.emails)) return res.sendFile(`${__dirname}/loginSuccess.html`)
  return res.sendFile(`${__dirname}/loginFail.html`)
})

export default router
