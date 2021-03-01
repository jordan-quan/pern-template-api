import corsUtility from 'cors'

const { CORS_ORIGINS } = global.config

/**
 * CORS middleware
 *
 * @return a CORS object with the private origins set
 */
const cors = corsUtility({
  origin: (origin, callback) => {
    if ((origin && CORS_ORIGINS.indexOf(origin) !== -1) || !origin) callback(null, true)
    else callback(new Error(`Not allowed by CORS, URL: ${origin}`))
  }
})

export default cors
