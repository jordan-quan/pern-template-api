import { redisClient } from 'gateway'

export default async (req, res) => {
  redisClient.flushall('ASYNC', () => {
    console.log('Cache flushed')
    res.sendStatus(200)
  })
}
