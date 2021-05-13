import config from 'config'
import { authHeader } from '../_helpers'
import axios from 'axios'

export const aveService = {
  getAll,
  getById,
  getFlickr,
  search
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${config.apiUrl}/index.php?option=com_birding&task=aves.getall&format=json&lang=es-ES`, requestOptions).then(handleResponse)
}

function getById (id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${config.apiUrl}/index.php?option=com_birding&task=aves.getById&format=json&lang=es-ES&id=${id}`, requestOptions).then(handleResponse)
}

function getFlickr (tags) {
  return axios({
    method: 'get',
    url: 'https://api.flickr.com/services/rest',
    params: {
      method: 'flickr.photos.search',
      api_key: config.api_key,
      tags: tags,
      extras: 'url_n, owner_name, date_taken, views',
      page: 1,
      format: 'json',
      nojsoncallback: 1,
      per_page: 30
    }
  }).then(flickrResponse)
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

function flickrResponse (response) {
  let photos = response.data.photos.photo.map(({ url_n: url, ownername: alt }) => ({ url, alt }))
  return photos
}

function search (q) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/index.php?option=com_birding&task=aves.search&format=json&lang=es-ES&q=${q}`, requestOptions).then(handleResponse)
}
