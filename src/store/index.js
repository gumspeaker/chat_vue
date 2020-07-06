import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:null,
    myToken:null
  },
  mutations: {
    init(state){
      state.myToken=localStorage.getItem("token")||''
      //state.User=localStorage.getItem("userName")||''
    },
    Login(state,userInfo){    
        state.myToken=userInfo.token
        state.userName=userInfo.username
        localStorage.setItem("token",userInfo.token)
        localStorage.setItem("username",userInfo.username)
    }
  },
  actions: {
  },
  modules: {
  }
})
