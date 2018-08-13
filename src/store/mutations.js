import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_DETAIL
} from './mutaton-types'

export default{
  [RECEIVE_DATA](state, {data}){
    state.data = data
  },

  [RECEIVE_BANNER](state, {banners}){
    state.banners = banners
  },

  [RECEIVE_HOME](state, {home}){
    state.home = home
  },

  [RECEIVE_DETAIL](state, {detail}){
    state.detail = detail
  }
}

