<template>
  <div>
    <MaskLayer v-if="isMaskLayer"/>
    <div>
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
      <div class="swiper-container lbt">
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

  import GoodGrid from '../../components/GoodGrid/GoodGrid'
  import MaskLayer from '../../components/MaskLayer/MaskLayer'

  export default {
    data() {
      return {
        activeIndex: 0, // 被选中的下标,
        isMaskLayer: false // 是否显示遮罩层
      }
    },

    mounted() {
      setTimeout(() => {
        this.isMaskLayer = true
      }, 300)

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

    computed: {
      ...mapState(['data', 'banners', 'home'])

    },

    methods: {
      active(index) {
        this.activeIndex = index
      },

    },

    components: {
      GoodGrid,
      MaskLayer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  /*头部*/
  .home-header
    position fixed!important
    z-index 100
    background-color #fff
    bottom-border-1px(#ccc)
    .logo-search
      padding 0.3rem 0.16rem
      display flex
      align-items center
      .logo
        width 1.38rem
        height 0.4rem
        margin-right 0.2rem
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
        background-repeat no-repeat
        background-size contain
        background-position center
        text-indent -9999px
      .search
        width 5.32rem
        height 0.56rem
        background-color #ededed
        border-radius .10667rem
        color #666
        display flex
        align-items center
        justify-content center
        .iconfont
          margin-right 0.05rem
    .header-tabs
      height 100%
      width 100%
      overflow hidden
      display flex
      .tab
        flex-shrink 0
        flex-flow row nowrap
        align-items center
        justify-content center
        z-index 1
        text-align center
        padding 0 0.4rem
        > span
          display inline-block
          padding 0 0.35rem
          line-height 0.6rem
          text-align center
          &.active
            color #b4282d
            border-bottom 0.01rem solid #b4282d

  /*轮播图*/
  .swiper-container
    width 100%
    height 100%

    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        img
          display block
          width 100%
          text-align center
          padding-bottom 0.1rem
    .swiper-pagination
      > span
        &.swiper-pagination-bullet
          margin 0 .13rem 0 0
          width .5rem
          height .05rem
          display inline-block
          background #fff
          opacity .4
          border-radius 0
        &.swiper-pagination-bullet-active
          background #fff
          opacity 1
          border-radius 0

  .lbt
    padding-top 1.8rem!important
  /*网易自营品牌*/
  .indexServeicPolicy
    width 100%
    height .72rem
    display flex
    flex-flow row nowrap
    align-items center
    zoom 1
    .item
      flex 1
      float left
      margin-left 0.2rem
      >a
        display inline-block
        vertical-align center
        height .4rem
        img
          width .3rem
          height .3rem
          vertical-align middle
        .text
          color #333
          line-height .5rem
          display inline-block
          vertical-align middle
  /*制造商*/
  .maker-header
    display flex
    align-items center
    justify-content center
    height 1.4rem
    >.more
      font-size .36rem
      color #333
  .maker-list
    position relative
    margin 0 .2rem
    height 6.2rem
    overflow hidden
    .item
      display inline-block
      position relative
      margin .04rem
      width 3.4rem
      height 3.1rem
      overflow hidden
      background-color #f4f4f4
      >a
        width 100%
        height 100%
        .cnt
          position absolute
          left 0
          top 0
          padding .2rem 0 0 .2rem
          width 100%
          z-index 4
          .title
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            color #333
            font-size .3rem
            line-height .45rem
            margin-bottom .08rem
          .price1
            color #333
            font-size .37rem
            line-height .45rem
          .price2
            color #333
            font-size .32rem
            line-height .45rem
        >img
          width 100%
          height 100%
  /*新品首发*/
  .indexFloor
    margin-top .2rem
    .new-hd
      background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png);
      background-size 7.5rem 3.4rem
      height 3.4rem
      margin-bottom .4rem
      position relative
      display flex
      justify-content center
      align-items center
      font-size .4rem
      >.more
        display block
        text-align center
        color #8BA0B6
        .all
          position relative
          margin .2rem auto 0
          width 3.2rem
          font-size .37rem
          line-height .74rem
          background #D8E5F1
    /*商品格子*/
    .goodGrid-newItem
      overflow hidden
      //margin-bottom 2rem
      .list
        float left
        display flex
        //border 1px solid #999
        height 4.5rem
        .item
          flex-shrink 0
          flex-flow row nowrap
          align-items center
          justify-content center
          z-index 1
          text-align center
          margin-left .4rem
          width 3rem
          float left
          position relative
          overflow hidden
          //border 1px solid red
          .good
            display block
            width 100%
            .hd
              background-color #f4f4f4
              img
                display block
                top 0
                left 0
                width 3rem
                height 2.8rem
            .tagWraper
              width 100%
              z-index 1
              margin 0 0 .2rem
              height .4rem
              padding-left .13rem
              display flex
              flex-direction row nowrap
              .status
                height .3rem
                padding .06rem
                margin .06rem
                line-height .26rem
                text-align center
                color #fff
                font-size .2rem
                border-radius .02rem
              .anniversary
                background-color #e5686d
              .gradientPrice
                background-color #f48f18
            .name
              margin-bottom .13rem
              padding 0 .13rem
              font-size .28rem
              line-height .28rem
              margin-top .13rem
              text-align left
              text-overflow ellipsis
              overflow hidden
              white-space nowrap
              color #333
            .newItemDesc
              display block
              padding 0 .13rem
              font-size .2rem
              color #7f7f7f
              line-height .4rem
              text-overflow ellipsis
              overflow hidden
              white-space nowrap
              text-align left
            .price
              padding 0 .13rem
              font-size .2rem
              line-height 1
              text-align left
              color #b4282d
  /*人气推荐 · 好物精选*/
  .popularItemList
    .new-hd
      background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)
      >.more
        color #B4A078
        .all
          background #F4E9CB
  /*严选限时购*/
  .indexFlash
    padding .4rem
    margin-bottom .26rem
    display flex
    .left-item
      display flex
      flex-direction column
      padding-top 1rem
      >.title
        font-size .34rem
        line-height .24rem
        margin-bottom .16rem
        color #333
        letter-spacing .16rem
      >.countdown
        display inline
        .hours,.mins,.secs
          display inline-block
          line-height .47rem
          text-align center
          width .6rem
          height .5rem
          font-size .4rem
          color #ffffff
          //border-radius 0.1rem
          background #444
        .colon
          color #333
          font-size .3rem
          width .15rem
          display inline-block
          text-align center
          font-weight 700
      .next-title
        margin-top .4rem
        color #333
        font-size .3rem
        line-height .3rem
        height .3rem

    .right-item
      margin-left 1rem
      width 3.2rem
      height 3.2rem
      position relative
      img
        width 100%
        height 100%
      .price
        height 1rem
        width 1rem
        //background red
        position absolute
        right .26rem
        bottom .48rem
        background-color rgba(244, 143, 24, 95)
        border-radius 100%
        color #ffffff
        text-align center
        display flex
        flex-direction column
        justify-content center
        .price-now28,.price-origin28
          font-size .3rem
          line-height .3rem
          height .3rem
        .price-origin28
          text-decoration line-through


  /*福利社*/
  .sale
    width 100%
    height 3rem
    margin-bottom .2rem
    >a
      width 100%
      height 100%
      display block
      background url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg)
      background-repeat no-repeat
      background-size contain
  /*专题精选*/
  .choice
    //margin-bottom 3rem
    >.hd
      background-size 7.5rem 3.4rem
      height 1.4rem
      position relative
      display flex
      justify-content center
      align-items center
      font-size .4rem
    >.indexTopics-slide
      padding 0 .4rem .48rem
      overflow hidden
      .list
        //width 5.8rem
        float left
        display flex
        flex-direction row nowrap
        >.item
          margin-left .1rem
          >.imgWrap
            display block
            width 100%
            height 2.8rem
            border-radius 0.1rem
            overflow hidden
            >img
              width 100%
              position relative
              left 50%
              transform translateX(-50%)
          .line1
            height .8rem
            margin-bottom .02rem
            zoom 1
            >.title
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              float left
              font-size .28rem
            >.price
              float right
              font-size .3rem
              color #b4282d
            >.desc
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              width 4.6rem
              font-size .2rem
              line-height .5rem
              color #7F7F7F
</style>
