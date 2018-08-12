
import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_HOME
} from './mutaton-types'

import {
  reqData,
  reqBanner,
  reqHome
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
  }
}
