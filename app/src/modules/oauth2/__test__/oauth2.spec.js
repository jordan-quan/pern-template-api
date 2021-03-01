import { expect, assert } from 'chai'
import request from 'supertest'

import { app } from '@/src'
import { isValidUser } from '../isValidUser'

describe('Login / OAuth2 Routes', () => {
  it('GET /login', async () => {
    const response = await request(app).get('/login')
    assert.equal(response.status, 302)
  })

  it('GET /login/callback', async () => {
    const response = await request(app).get('/login/callback')
    assert.equal(response.status, 302)
  })

  it('isValidUser validates @gmail.com email', () => {
    const emails = [{ value: 'test@gmail.com' }]
    expect(!!isValidUser(emails)).to.be.true
  })
})
