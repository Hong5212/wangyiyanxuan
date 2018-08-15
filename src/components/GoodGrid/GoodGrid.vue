<template>
  <div style="margin-bottom: 1rem">
    <div class="titleGoodGrid" v-for="(goods, index) in goodGrides" :key="index">
      <h3 class="title">{{goods.name}}好物</h3>
      <ul class="list">
        <li class="item" v-for="(good, index) in goods.itemList" :key="index">
          <div class="item-hd">
            <div class="wraper">
              <img :src="good.listPicUrl" alt="图片">
              <div class="desc">{{good.simpleDesc}}</div>
            </div>
          </div>
          <p class="status">居家特惠</p>
          <p class="name">{{good.name}}</p>
          <span class="price">￥{{good.couponPrice}}</span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      goodGrides: Array // 接受声明的属性
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .titleGoodGrid
    .title
      line-height 1.6rem
      text-align center
      font-size .37rem
      color #333
      background-color #ffffff
    .list
      position relative
      z-index 0
      overflow hidden
      .item
        float left
        position relative
        width 50%
        padding 1%
        box-sizing border-box
        overflow hidden
        background-color #ffffff
        .item-hd
          border-radius .05rem
          position relative
          z-index 0
          margin-bottom .1rem
          img
            position absolute
            width 100%
            height 3.5rem
            border-radius .05rem .05rem 0 0
            background-color #f4f4f4
          .wraper
            position relative
            padding-bottom 120%
          .desc
            position absolute
            bottom 0
            width 93%
            background-color #F1ECE2
            //border-radius 0 0 0.53rem 0.53rem
            font-size .32rem
            color #9F8A60
            letter-spacing 0
            line-height .3rem
            padding .26rem .13rem
            white-space nowrap
            text-overflow ellipsis
            overflow hidden

        .status
          margin-top .013rem
          height .4rem
          padding .06rem .21rem
          line-height .26rem
          text-align center
          color #ffffff
          display inline-block
          vertical-align middle
          background-color #f48f18
        .name
          margin-top .13rem
          padding 0 .13rem
          line-height .64rem
          text-align left
          font-size .37rem
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          color: #333

        .price
          line-height 1
          font-size .36rem
          text-align left
          color #b4282d
          padding 0 .13rem
</style>
