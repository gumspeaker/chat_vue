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
    Login(state,token){
        //state.myToken=userInfo.token,
        //state.userName=userInfo.userName
        localStorage.setItem("token",token)
        //localStorage.setItem("UserName",userInfo.UserName)
    }
  },
  actions: {
  },
  modules: {
  }
})
