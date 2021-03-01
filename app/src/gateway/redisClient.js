import redis from 'redis'

const { REDIS_HOST, REDIS_PORT } = global.config

console.log('Establishing Redis connection at:', REDIS_HOST, 'with port: ', REDIS_PORT)

export const redisClient = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
  enable_offline_queue: false,
  no_ready_check: true,
  retry_strategy: (options) => {
    if (options.error?.code === 'ECONNREFUSED') return new Error('The server refused connection')
    if (options.attempt > 10) return new Error('Retry attempts exhausted')
    return Math.min(options.attempt * 1000, 30000)
  }
})

redisClient.on('error', (err) => console.error(`Redis error: ${err}`))
redisClient.on('reconnecting', () => console.info('Redis reconnecting'))
redisClient.on('connect', () => console.info('Redis connection established'))
