import { stringify } from 'qs'
import {_axios as axios} from '@/plugins/axios'

export default function (url, options = {}) {
  const defaultMethod = 'post'
  const conf = Object.assign({ method: defaultMethod }, options)
  let { method, mock, body, download } = conf
  method = method.toLowerCase()
  let payload = ['post', 'put', 'patch'].includes(method) ? 'data' : 'params'
  if (mock) url += (~url.indexOf('?') ? '&' : '?') + '__mock__'

  const config = Object.assign({}, conf, {
    url,
    method,
    [payload]: body
  }, options)

  if (download) {
    window.open(url + '?' + stringify(body))
    return Promise.resolve(true)
  } else {
    return axios.request(config)
  }
}