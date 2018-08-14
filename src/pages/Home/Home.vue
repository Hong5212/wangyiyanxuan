<template>
  <div>
    <MaskLayer/>
    <div v-show="false">
      <!--头部-->
      <div class="home-header">
        <div class="logo-search">
          <a class="logo">网易严选</a>
          <div class="search">
            <i class="iconfont icon-xingtaiduICON_sousuo--"></i>
            <span class="placeholder">搜索商品, 共11781款好物</span>
          </div>
        </div>
        <div class="header-tabs">
          <div class="tab">
            <span v-for="(good, index) in data" :key="index"
                  :class="{active: index === activeIndex}" @click="active(index)">{{good.name}}</span>
          </div>
        </div>
      </div>
      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
            <img :src="banner.picUrl">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <!--网易自营品牌-->
      <div class="indexServeicPolicy">
        <ul class="g-grow">
          <li class="item" v-for="(policy, index) in home.policyDescList" :key="index">
            <a href="javascript:;">
              <!--<i class="iconfont icon-anonymous-iconfont"></i>-->
              <img :src="policy.icon">
              <span class="text">{{policy.desc}}</span>
            </a>
          </li>
        </ul>
      </div>
      <!--制造商-->
      <div class="maker">
        <div class="maker-header">
          <a class="more" href="javascript:;">
            <span>品牌制造商直供</span>
            <i class="iconfont icon-yuanjiantou1"></i>
          </a>
        </div>
        <ul class="maker-list">
          <li class="item" v-for="(tag) in home.tagList">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">{{tag.name}}</h4>
                <div>
                  <span class="price1">{{tag.floorPrice}}</span>
                  <span class="price2">元起</span>
                </div>
              </div>
              <img :src="tag.picUrl" alt="">
            </a>
          </li>
        </ul>
      </div>
      <!--新品首发-->
      <div class="indexFloor newItems">
        <div class="new-hd">
          <a class="more" href="javascript:;">
            <span>新品首发</span>
            <div class="all">
            <span class="wrap">
              <span>查看全部</span>
            </span>
            </div>
          </a>
        </div>
        <!--商品格子-->
        <div class="goodGrid-newItem" ref="newItems">
          <ul class="list">
            <li class="item" v-for="(newItem, index) in home.newItemList" :key="index">
              <a class="good" href="javascript:;">
                <div class="hd">
                  <img :src="newItem.primaryPicUrl" alt="玫瑰">
                  <!--<div class="desc">玫瑰诉情，爱意难休</div>-->
                </div>
                <div class="tagWraper">
                  <p class="status anniversary">七夕推荐</p>
                  <p class="status gradientPrice">七夕礼物价</p>
                </div>
                <div class="name">
                  <span>{{newItem.name}}</span>
                </div>
                <div class="newItemDesc">{{newItem.simpleDesc}}</div>
                <div class="price">
                  <span>￥{{newItem.retailPrice}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--人气推荐 · 好物精选-->
      <div class="indexFloor popularItemList">
        <div class="new-hd">
          <a class="more" href="javascript:;">
            <span>人气推荐 · 好物精选</span>
            <div class="all">
            <span class="wrap">
              <span>查看全部</span>
            </span>
            </div>
          </a>
        </div>
        <!--商品格子-->
        <div class="goodGrid-newItem" ref="popular">
          <ul class="list">
            <li class="item" v-for="(newItem, index) in home.newItemNewUserList" :key="index">
              <a class="good" href="javascript:;">
                <div class="hd">
                  <img :src="newItem.primaryPicUrl" alt="玫瑰">
                  <!--<div class="desc">玫瑰诉情，爱意难休</div>-->
                </div>
                <div class="tagWraper">
                  <p class="status anniversary">满额减</p>
                </div>
                <div class="name">
                  <span>{{newItem.name}}</span>
                </div>
                <div class="newItemDesc">{{newItem.simpleDesc}}</div>
                <div class="price">
                  <span>￥{{newItem.retailPrice}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--严选限时购-->
      <div class="indexFlash">
        <div class="left-item">
          <div class="title">严选限时购</div>
          <div class="countdown">
            <span class="hours">17</span>
            <span class="colon">:</span>
            <span class="mins">18</span>
            <span class="colon">:</span>
            <span class="secs">02</span>
          </div>
          <div class="next-title">
          <span>
            <span>下一场</span>
            <span>18:00</span>
            <span>开始</span>
          </span>
          </div>
        </div>
        <div class="right-item">
          <div>
            <img
              src="http://yanxuan.nosdn.127.net/a1a42111fd2f8bcaeaf321bcd62890ef.png?imageView&quality=85&thumbnail=330x330"
              alt="">
          </div>
          <div class="price">
            <div class="price-now28">
              <span class="rmb1">￥</span><span>139</span>
            </div>
            <div class="price-origin28">
              <span class="rmb2">￥</span><span class="t">169</span>
            </div>
          </div>
        </div>
      </div>
      <!--福利社-->
      <div class="sale">
        <a href="javascript:;"></a>
      </div>
      <!--专题精选-->
      <div class="indexFloor choice">
        <div class="hd">
          <a class="more" href="javascript:;">
            <span>专题精选</span>
            <i class="iconfont icon-yuanjiantou1"></i>
          </a>
        </div>
        <div class="indexTopics-slide">
          <ul class="list">
            <li class="item" v-for="(item,index) in home.topicList" :key="index">
              <a class="imgWrap" href="javascript:;">
                <img :src="item.itemPicUrl" alt="">
              </a>
              <div class="line1">

                <h4 class="title">{{item.title}}</h4>
                <span class="price"><span>{{item.priceInfo}}元起</span></span>
                <div class="desc">{{item.subtitle}}</div>
              </div>
            </li>
            <!--<li class="item">
              <a class="imgWrap" href="javascript:;">
                <img
                  src="http://yanxuan.nosdn.127.net/2f49b6ded76919ac7894b02fc9347410.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75"
                  alt="">
              </a>
              <div class="line1">
                <h4 class="title">青汁兑蜂蜜, 轻盈又甜蜜</h4>
                <span class="price">
                    <span>129</span>
                    <span>元起</span>
                  </span>
                <div class="desc">每天来杯青汁蜂蜜水，给生活添一点甜蜜</div>
              </div>
            </li>-->
          </ul>
        </div>
      </div>
      <!--商品列表-->
      <GoodGrid :goodGrides="home.cateList"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'

  import '../../common/stylus/home.styl'
  import GoodGrid from '../../components/GoodGrid/GoodGrid'
  import MaskLayer from '../../components/MaskLayer/MaskLayer'

  export default {
    data() {
      return {
        // goods: ['推荐', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食', '餐厨'],
        activeIndex: 0 // 被选中的下标
      }
    },

    computed: {
      ...mapState(['data', 'banners', 'home'])

    },

    mounted() {
      // 请求后台获取home 头部nav数据
      this.$store.dispatch('getData', () => {
        this.$nextTick(() => {
          new BScroll('.header-tabs', {
            scrollX: true,
            click: true,
            eventPassthrough: 'vertical' // 垂直滑动(事件转移)
          })
        })
      })
      // 请求后台获取banner数据
      this.$store.dispatch('getBanner', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      })

      this.$store.dispatch('getHome', () => {
        this.$nextTick(() => {
          new BScroll(this.$refs.newItems, {
            scrollX: true,
            click: true,
            eventPassthrough: 'vertical'
          })
          new BScroll(this.$refs.popular, {
            scrollX: true,
            click: true,
            eventPassthrough: 'vertical'
          })
          new BScroll('.indexTopics-slide', {
            scrollX: true,
            click: true,
            eventPassthrough: 'vertical'
          })
        })
      })

    },

    methods: {
      active(index) {
        this.activeIndex = index
      }
    },

    components: {
      GoodGrid,
      MaskLayer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
