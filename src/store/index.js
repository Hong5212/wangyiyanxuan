import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

// 使用插件
Vue.use(Vuex)

// 暴露store的实例对象
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
