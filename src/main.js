import Vue from 'vue'
import App from './App'
import router from './router'

import 'swiper/dist/css/swiper.min.css'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),

  /*components: { App },
  template: '<App/>'*/
  router,  // 配置路由器
})
