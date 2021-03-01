import { assert } from 'chai'
import request from 'supertest'

import { app } from '@/src'

describe('Utils Routes', () => {
  it('GET /utils/flush', async () => {
    const response = await request(app).get('/utils/flush')
    assert.equal(response.status, 200)
  })
})
