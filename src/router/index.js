import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/login',
    meta: { needLogin:false }
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import ('../views/Login.vue')
  },
  {
    path: '/main',
    name: 'chat',
    meta: { needLogin:true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainChat.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
