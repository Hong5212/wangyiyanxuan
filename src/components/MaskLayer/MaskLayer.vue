<template>
  <div class="m-newWapUserGiftModal" v-if="isMask">
    <div class="mask"></div>
    <i class="icon-modalClose close" @click="isMask = false"></i>
    <div class="wrap">
      <div class="modal">
        <div class="title">
          <span class="titleContent">新人专享礼</span>
        </div>
        <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
        <div class="m-newUserItem">
          <img src="http://yanxuan.nosdn.127.net/09f21a0f79a13574f06f635fe3942a28.jpg?imageView&quality=85&thumbnail=232y232" alt="">
          <div class="content">
            <div class="itemName">休闲复古男式慢跑鞋</div>
            <div class="manu">
              <i class="manuTag">自由自在运动</i>
            </div>
            <div class="price">
              <span class="retailPrice">￥289.00</span>
              <span class="comparePrice">￥599.00</span>
            </div>
          </div>
        </div>
        <div class="actCouponBtn">
          <span>领券立减￥34.00</span>
        </div>
        <a class="linkBtn" href="javascript:;">查看更多特惠商品</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isMask: true // 是否显示遮罩层
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*遮罩层*/
  .m-newWapUserGiftModal
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 9999
    >.mask
      position absolute
      top 0
      left 0
      z-index 0
      width 100%
      height 100%
      background-color rgba(0, 0, 0, .4)
    >.close
      position fixed
      right .4rem
      top .8rem
      z-index 2
    .icon-modalClose
      display inline-block
      vertical-align middle
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png)
      background-repeat no-repeat
      background-size 100% 100%
      width .6rem
      height .6rem
    >.wrap
      transform translate(-50%, -50%)
      position absolute
      top 50%
      left 50%
      z-index 1
      >.modal
        width 6rem
        height 6.2rem
        background-color #ffffff
        border-radius .21rem
        padding .4rem .32rem
        >.title
          font-size .4rem
          text-align center
          >.titleContent
            display inline-block
            position relative
            font-weight 700
            &::before,&::after
              width .53rem
              height .05rem
              background-color #333
              position absolute
              top .2rem
              content ''
            &::before
              left -.74rem
            &::after
              left 2.1rem


        >.subTitle
          margin-top .2rem
          font-size .24rem
          text-align center
        >.m-newUserItem
          margin-top .4rem
          background-color #f4f4f4
          border-radius .05rem
          height 2.6rem
          width 100%
          display flex
          >img
            width 2.6rem
            height 2.6rem
          >.content
            margin-left .1rem
            -webkit-box-flex 1
            flex 1
            padding .57rem 0
            .itemName
              font-size .28rem
              //width 3.7rem
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
            .manu
              margin-top .2rem
              .manuTag
                border .01rem solid #7ff7f7
                border-radius .05rem
                padding 0 .1rem
                height .48rem
                line-height .48rem
                font-style normal
            .price
              margin-top .2rem
              font-size .28rem
              .retailPrice
                color #b4282d

        >.actCouponBtn,>.linkBtn
          height .87rem
          font-size .28rem
          margin-top .2rem
          border-radius .05rem
          text-align center
          line-height .87rem
        >.actCouponBtn
          background-color #b4282d
          color #ffffff
        >.linkBtn
          display block
          background-color #ffffff
          color #000
          border .01rem solid #b4282d

</style>
