import axios from 'axios'

/**
 * Used for making simple GET requests using the axios http request library
 * @param {String} url A url string
 * @param {Object} params Parameters passed to the url string
 *
 * Returns a Resolved axios promise response Object
 * Returns a Rejected Promise error object if the GET request fails
 */
export const query = async (url, params) => {
  const axiosConfig = {
    url,
    method: 'get',
    params
  }

  try {
    return await axios(axiosConfig)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`${error.message} ${url} : ${params} `)
    return error
  }
}
