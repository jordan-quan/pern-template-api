import crypto from 'crypto'

/**
 * A hash function that encodes and decodes values
 * @param  {String} val a value or hash
 * @return {Boolean} an encoded or decoded value
 */
export const hashValue = (val) => {
  return crypto.createHash('sha256').update(val).digest('base64')
}

export default hashValue
