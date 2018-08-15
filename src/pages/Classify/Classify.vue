<template>
  <div class="j-categoryList">
    <!--头部-->
    <div class="hdWraper">
      <div class="m-hd">
        <div class="m-itemCateListHd">
          <div class="m-topSearchIpt ipt">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共11963款好物</span>
          </div>
        </div>
      </div>
    </div>
    <!--左侧导航-->
    <div class="m-cateNavVertWrap">
      <ul class="m-cateNavVert">
        <li class="item" v-for="(category, index) in categories":key="index"
            :class="activeIndex === index ? 'active': ''" @click=active(index)>
          <a class="txt" href="javascript:;">{{category.name}}</a>
        </li>
      </ul>
    </div>
    <!--右侧列表-->
    <ListItem :categories="categories" :activeIndex="activeIndex"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import ListItem from '../../components/ListItem/ListItem'

  export default {
    data() {
      return {
        activeIndex: 0  // 活动的下标
      }
    },

    mounted() {
      this.$store.dispatch('getCategories', () => {
        this.$nextTick(() => {
          new BScroll('.m-cateNavVertWrap',{
            click: true
          })
        })
      })
    },

    methods: {
      active(index){
        this.activeIndex = index
      }
    },

    computed: {
      ...mapState(['categories'])
    },

    components: {
      ListItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  /*头部*/
  .hdWraper
    .m-hd
      position fixed!important
      left 0
      top 0
      z-index 5
      width 100%
      bottom-border-1px(#ccc)
      .m-itemCateListHd
        display flex
        align-items center
        height 1.17rem
        padding 0 .4rem
        background-color #fff
        position relative
        .m-topSearchIpt
          width 100%
          display flex
          flex-flow row nowrap
          align-items center
          justify-content center
          height .74rem
          font-size .37rem
          background-color #ededed
          border-radius .1rem
          .icon
            display inline-block
            vertical-align middle
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
            background-size 100% 100%
            width .37rem
            height .37rem
            margin-right .13rem
          .placeholder
            color #666
            font-size .27rem
  /*左侧导航*/
  .m-cateNavVertWrap
    top 1.3rem
    position fixed
    bottom 1.3rem
    z-index 4
    width 1.4rem
    background-color #fff
    border-right .01rem solid #ccc
    padding-top .35rem
    .item
      width 100%
      height .6rem
      text-align center
      //border none
      margin-bottom .4rem
      .txt
        display block
        width 100%
        height 100%
        line-height .6rem
        padding-left .04rem
      &.active
        .txt
          border-left .04rem solid #ab2b2b
          color #ab2b2b
          box-sizing border-box
</style>

