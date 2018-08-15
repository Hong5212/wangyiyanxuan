<template>
  <div class="m-exploreChannels">
    <div class="list">
      <div class="item" v-for="(item,index) in scroll">
        <div class="imgContainer">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="rbGradient">
          <div class="topNum">{{item.articleCount}}</div>
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      scroll: Array
    },

    mounted() {
      new BScroll('.m-exploreChannels', {
        scrollX: true,
        click: true,
        eventPassthrough: 'vertical' // 垂直滑动(事件转移)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*文章*/
  .m-exploreChannels
    overflow hidden
    padding .2rem
    height 2rem
    background-color #fff
    margin-bottom .26rem
    .list
      display flex
      flex-flow row nowrap
      float left
      .item
        position relative
        width 1.8rem
        height 1.8rem
        margin 0 .2rem
        .imgContainer
          width 1.8rem
          height 1.8rem
          img
            width 100%
            height 100%
            border-radius .05rem
        .rbGradient
          position absolute
          top 0
          right .2rem
          color #ffffff
          width 1.4rem
          height .42rem
          line-height .42rem
          background rgba(200, 200, 200, .5)
          border-radius .1rem
          font-size .12rem
          text-align center
        .title
          height 1rem
          color #333
          font-size .2rem
          line-height 1
          text-align center
          width 1.8rem
          margin-top .1rem



</style>
