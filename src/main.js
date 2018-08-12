import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'


import 'swiper/dist/css/swiper.min.css'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),

  /*components: { App },
  template: '<App/>'*/
  router,  // 配置路由器
  store,  // 注册store, 全局都有一个$store
});
