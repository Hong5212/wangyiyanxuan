<template>
  <div class="m-exploreRcmds" v-if="detail.recommendOne">
    <div class="container">
      <div class="module-title">{{detail.recommendOne.nickname}}</div>
      <div class="m-mainPosItem">
        <div class="imgContainer">
          <div class="topicTag">
            <div class="m-exploreTag">{{detail.recommendOne.typeName}}</div>
          </div>
        </div>
        <div class="topicInfo">
          <div class="line1">
            <div class="title">{{detail.recommendOne.typeName}}</div>
            <div class="price">{{detail.recommendOne.priceInfo}}元起</div>
          </div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.recommendTwo.avatar">
              </div>
              <div class="nickname">{{detail.recommendTwo.nickname}}</div>
            </div>
          </div>
          <div class="line1">
            <div class="title">{{detail.recommendTwo.title}}</div>
          </div>
          <div class="line2">
            <div class="subTitle"
                 v-if="detail.recommendTwo">{{detail.recommendTwo.subTitle}}</div>
          </div>
        </div>
        <div class="minorPic">
          <div class="imgContainer">
            <img :src="detail.recommendTwo.picUrl" alt="">
            <div class="topicTag">
              <div class="m-exploreTag">{{detail.recommendTwo.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.recommendThree.avatar">
              </div>
              <div class="nickname">{{detail.recommendThree.nickname}}</div>
            </div>
          </div>
          <div class="line1">
            <div class="title">{{detail.recommendThree.title}}</div>
          </div>
          <div class="line2">
            <div class="subTitle"
                 v-if="detail.recommendOne">{{detail.recommendOne.subTitle}}</div>
          </div>
        </div>
        <div class="minorPic">
          <div class="imgContainer">
            <img :src="detail.recommendThree.picUrl" alt="">
            <div class="topicTag">
              <div class="m-exploreTag">{{detail.recommendThree.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      detail: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*为你推荐*/
  .m-exploreRcmds
    background-color #fff
    padding 0 .4rem .53rem
    margin-bottom .26rem
    .module-title
      background-color #fff
      text-align center
      font-size .42rem
      height 1.6rem
      line-height 1.6rem
    .m-mainPosItem
      padding-bottom .4rem
      margin-bottom .4rem
      background url(//yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg)
      background-repeat no-repeat
      background-size contain
      border 1px solid #d9d9d9
      border-radius .05rem
      .imgContainer
        position relative
        height 4rem
        border-radius .1rem .1rem 0 0
        overflow hidden
        .topicTag
          position absolute
          top .26rem
          left .26rem
          .m-exploreTag
            display inline-block
            padding 0 .21rem
            height .48rem
            line-height .48rem
            background-color rgba(255, 255, 255, .9)
            border 1px solid #d9d9d9
            border-radius .26rem
            color #333

      .topicInfo
        overflow hidden
        position relative
        padding .32rem .26rem 0
        background-color #ffffff
        .line1
          margin-bottom .25rem
          display flex
          justify-content space-between
          align-items center
          line-height 1.2
          .title
            flex 1
            margin-right .4rem
            font-size .4rem
            text-overflow ellipsis
            overflow hidden
          .price
            line-height 1
            font-size .35rem
            text-align right
            min-width 1.5rem



    .m-minorPosItem
      display flex
      background-color #fff
      color #333
      border 1px solid #d9d9d9
      border-radius .05333rem
      margin-bottom .4rem
      .topicInfo
        width 3.3rem
        //flex 1
        display flex
        flex-direction column
        justify-content center
        overflow hidden
        //position relative
        padding-left .26rem
        padding-right .4rem
        .author-container
          //margin-bottom .33rem
          .author
            display flex
            align-items center
            .avatar
              width .64rem
              height .64rem
              margin-right .1rem
              border-radius 50%
              overflow hidden
              border .01rem solid #d9d9d9
              >img
                display block
                width 100%
                height 100%
            >.nickname
              color #333
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              font-size .2rem
        .line1
          margin-bottom .18rem
          line-height 1.2
          >.title
            margin-right .4rem
            font-size .32rem
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
        .line2
          .subTitle
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            overflow hidden
            text-overflow ellipsis
            position relative
            font-size .24rem
            line-height 1.5
            color #7f7f7f

      .minorPic
        position relative
        width 2.7rem
        height 2.7rem
        .imgContainer
          //background-image url(//yanxuan.nosdn.127.net/64360c9a450908a76411b5db9eb1efd9.jpg)

          position relative
          width 100%
          height 100%
          background-color #f4f4f4
          img
            width 100%
            background-size contain
            background-repeat no-repeat
          .topicTag
            position absolute
            top .13rem
            left .13rem
            .m-exploreTag
              font-size .24rem
              display inline-block
              padding 0 .21rem
              height .48rem
              line-height .48rem
              background-color rgba(255,255,255,.9)
              border .01rem solid #d9d9d9
              border-radius .26rem
              color #333
</style>
