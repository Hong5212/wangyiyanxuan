<template>
  <div>
    <div class="m-exploreMore">

      <div class="line-title">
        <div class="inner">更多精彩</div>
      </div>

      <div class="content" v-for="(item,index) in detail.findMore">
        <div class="topicItem">
          <div class="imgContainer pic1">
            <img :src="item.itemPicUrl" alt="图片">
          </div>
          <div class="desc">夏天是出游的季节，进入7月，好像大家都开启了度假模式。</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      detail: Object // 接受声明对象
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*更多精彩*/
  .m-exploreMore
    //margin 0 .4rem .4rem
    .line-title
      height 1.8rem
      display flex
      align-items center
      &::before,&::after
        content ''
        display block
        width 2.8rem
        height .01rem
        background-color #d9d9d9
      .inner
        margin 0 auto
        font-size .37rem
        color #333

    .content
      display block
      color #333
      .topicItem
        //display block
        padding .32rem
        background-color #fff
        color #333
        .pic1
          float left
          width 100%
          //width 4.6rem
          //height 4.45rem
          margin-right .05rem
          background-color #f4f4f4
          >img
            width 100%
            height 100%
        .right
          float right
          width 2.2rem
          >img
            width 100%
        .desc
          clear both
          background-color #fff
          font-size .27rem
          padding-top .38rem
          padding-bottom .37rem
          line-height .4rem
          text-overflow ellipsis
          white-space nowrap
          overflow hidden

</style>
