"use strict";

import Vue from 'vue';
import axios from "axios";
import store from '../store/index'
//import { Message, Loading } from 'element-ui'
//import { getToken } from '@/utils/auth'
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = '39.101.192.76';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.withCredentials=true;
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
let config = {
   baseURL: 'http://39.101.192.76:8099',
  //  baseURL: 'http://localhost:8099',
   timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  config => {
    const token = store.state.myToken
    //console.log(token)
    if (token!=null) {
      config.headers['Authorization'] =  token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    //  console.log(error)
    Promise.reject(error)
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  res => {
   
    
    const code = res.data.rspCode||res.status


      return res
    
  },
  error => {
    // console.log('err' + error)
    return Promise.reject(error)
  }
);
export {_axios} 
Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
 
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
