import config from 'config'
import { authHeader } from '../_helpers'

export const pubService = {
  getAll,
  getById
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${config.apiUrl}/index.php?option=com_birding&task=pub.getall&format=json&lang=es-ES`, requestOptions).then(handleResponse)
}

function getById (id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${config.apiUrl}/index.php?option=com_birding&task=pub.getById&format=json&lang=es-ES&id=${id}`, requestOptions).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    if (!data.success) {
      const error = data.messages.warning[0]
      return Promise.reject(error)
    }
    return data.data
  })
}
