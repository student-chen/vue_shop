import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import http from './api/index.js'
import './assets/css/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.prototype.$http = http
axios.defaults.baseURL = 'http://www.liulongbin.top:8888/api/private/v1/'
// Vue.prototype.$api = axios
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
