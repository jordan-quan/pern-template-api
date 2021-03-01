import chalk from 'chalk'

import { redisClient } from 'gateway'

const { REDIS_TTL } = global.config

/**
 * Caching middleware using Redis
 */
const cache = (req, res, next) => {
  if (/(no-cache|no-store)/.test(req.headers['cache-control'])) {
    console.log(chalk.bold('Skip cache'))
    next()
  } else {
    console.log(chalk.bold('Check against cache'))
    const key = req.originalUrl

    redisClient.get(key, (err, cached) => {
      if (err) {
        console.warn(`${chalk.underline.bold.red('Error occurred on cache')}: ${err} for ${key}.`)
        next()
      } else if (cached) {
        console.info(`${chalk.underline.bold.green('Cache found for')}: ${key}`)
        res.send(JSON.parse(cached))
      } else {
        console.info(`${chalk.underline.bold('No cache found with key')}: ${key}`)
        console.log(chalk.grey.bold('Getting new data'))
        res.sendResponse = res.send
        res.send = (newBody) => {
          if (newBody) {
            redisClient.set(key, newBody, () => {
              redisClient.expire(key, REDIS_TTL)
              console.info(
                `${chalk.underline.bold('Set Redis cache with key')}: ${key}, TTL: ${REDIS_TTL}`
              )
            })
            res.sendResponse(newBody)
          }
        }
        next()
      }
    })
  }
}

export default cache
