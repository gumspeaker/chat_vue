import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  if(to.meta.needLogin&&localStorage.getItem('token')===null)      
      next('/login');
  else
    next();
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
