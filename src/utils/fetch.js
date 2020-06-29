import fetch from './request'
import { stringify } from 'qs'
export function update (api,params) {
    return fetch(api, {
      body:stringify( params)//这里注意一下，这是xxx-www-form-data的格式，如果日后要使用json格式的context-type就得把stringify去掉
    })
  }
  
  export function detail (api,params) {
    return fetch(api, {
      method: 'get',
      body: params
    })
  }