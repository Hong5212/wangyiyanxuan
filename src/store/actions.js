import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_DETAIL,
  RECEIVE_NAV
} from './mutaton-types'

import {
  reqData,
  reqBanner,
  reqHome,
  reqDetail,
  reqNav
} from "../api"
// console.log(reqData);

export default {
  // 异步获取home头部导航数据
  async getData({commit}, cb){
    // console.log("a");
    const result = await reqData();
    // console.log(result);
    if(result.code === 0){
      const data = result.data;
      // console.log(data, 'xxx')
      commit(RECEIVE_DATA, {data})
    }
    cb && cb()
  },

  // 异步获取home的banner数据
  async getBanner({commit}, cb){
    const result = await reqBanner();
    if(result.code === 0){
      // console.log(result);
      const banners = result.focusList;
      commit(RECEIVE_BANNER, {banners})
    }
    cb && cb()
  },

  // 异步获取home的数据
  async getHome({commit}, cb){
    const result = await reqHome();
    if(result.code === 0){
      // console.log(result);
      const home = result.home;
      // console.log(home);
      commit(RECEIVE_HOME, {home})
    }
    cb && cb()
  },

  // 异步获取 识物模块 的数据
  async getDetail({commit}, cb){
    const result = await reqDetail();
    if(result.code === 0){
      const detail = result.detail;
      commit(RECEIVE_DETAIL, {detail})
    }
    cb && cb()
  },

  // 异步获取 分类页 的数据
  async getCategories({commit}, cb){
    const result = await reqNav();
    if(result.code === 0){
      const categories = result.categories;
      // console.log(result);
      commit(RECEIVE_NAV, {categories})
    }
    cb && cb()
  }
}
