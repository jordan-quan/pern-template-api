import express from 'express'

import { corsMiddleware } from 'middleware'
import flush from './flush'

const router = express.Router()
router.get('/flush', corsMiddleware, flush)

export default router
