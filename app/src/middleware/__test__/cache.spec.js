import { expect } from 'chai'
import sinon from 'sinon'

import { redisClient } from 'gateway'
import cache from '../cache'

const req = {
  protocol: '',
  originalUrl: Math.random().toString(36).substring(7),
  headers: { host: '' }
}
const testObject = {
  myVar: 'value'
}

describe('Cache middleware', () => {
  it('should return a function()', () => {
    expect(cache).to.be.a('function')
  })

  it('should skip if Cache-control: no-cache is on header', () => {
    req.headers['cache-control'] = 'no-cache'
    const next = sinon.spy()
    cache(req, {}, next)
    expect(next.calledOnce).to.be.true
  })

  it('should skip if Cache-control: no-store is on header', () => {
    req.headers['cache-control'] = 'no-store'
    const next = sinon.spy()
    cache(req, {}, next)
    expect(next.calledOnce).to.be.true
  })

  it('should set cached data on new request', (done) => {
    req.headers['cache-control'] = ''
    const mockedClient = sinon
      .stub(redisClient, 'get')
      .callsFake((value, func) => func(false, false))
    sinon.stub(redisClient, 'set').callsFake(() => true)
    const next = sinon.spy()
    const res = { send: sinon.spy() }
    cache(req, res, next)
    setTimeout(() => {
      res.send(JSON.stringify(testObject))
      expect(res.sendResponse.calledOnce).to.be.true
      done()
    }, 100)
    mockedClient.restore()
  })

  it('should get cache on cached request', (done) => {
    req.headers['cache-control'] = ''
    sinon.stub(redisClient, 'get').callsFake((value, func) => func(false, true))
    const next = sinon.spy()
    const res = { send: sinon.spy() }
    cache(req, res, next)
    setTimeout(() => {
      expect(res.send.calledOnce).to.be.true
      done()
    }, 100)
  })
})
