<template>
  <div>
    <!--头部-->
    <ShiwuHeader/>
    <!--登陆类型的容器-->
    <div class="loginTypesWrap">
      <div class="m-loginTypes">
        <div class="cont">
          <div class="logoWrap">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="btnWrap">
            <router-link class="w-button" to="/login">
              <i class="loginPhone"></i>
              <span>手机号码登录</span>
            </router-link>
            <router-link class="w-button" to="/login">
              <i class="loginMail"></i>
              <span>邮箱帐号登录</span>
            </router-link>
            <router-link class="btn" to="/login">
              <span>手机号快捷注册</span>
              <i class="arrow-right3"></i>
            </router-link>
          </div>
        </div>
        <div class="thirdWrap">
          <div class="itemWrap">
            <router-link class="item" to="/login">
              <!--<i class="icon icon-weixin"></i>-->
              <span class="name">微信</span>
            </router-link>
          </div>
          <div class="itemWrap">
            <router-link class="item" to="/login">
              <!--<i class="icon icon-weixin"></i>-->
              <span class="name">QQ</span>
            </router-link>
          </div>
          <div class="itemWrap">
            <router-link class="item" to="/login">
              <!--<i class="icon icon-weixin"></i>-->
              <span class="name">微博</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader'

  export default {
    components: {
      ShiwuHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*登陆类型的容器*/
  .m-loginTypes
    overflow hidden
    position relative
    height 13.3rem
    background #F2F5F4
    .cont
      .logoWrap
        text-align center
        padding 1.6rem 0
        >img
          width 2.68rem
          height .9rem
      .btnWrap
        padding 0 .4rem
        margin-bottom 2.03rem
        .w-button
          display block
          margin-bottom .4rem
          border-radius .04rem
          width 100%
          height 1rem
          line-height 1rem
          vertical-align middle
          text-align center
          font-size .14rem
          color #fff
          border .01rem solid #b4282d
          overflow hidden
          &:nth-of-type(1)
            background-color #b4282d
          &:nth-of-type(2)
            color #b4282d
          .loginPhone,.loginMail
            margin-right .08rem
            position relative
            top -.04rem
            display inline-block
            vertical-align middle
            width .4rem
            height .4rem
          .loginPhone
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)
            background-repeat no-repeat
            background-size .4rem
            background-position 0rem -.5rem
          .loginMail
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)
            background-repeat no-repeat
            background-size .4rem
            background-position 0 0

        .btn
          display block
          color #333
          font-size .14rem
          text-align center
          width 100%
          .arrow-right3
            //margin-right .8rem
            position relative
            top -.02rem
            display inline-block
            vertical-align middle
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png)
            background-repeat no-repeat
            background-size 100% 100%
            width .28rem
            height .28rem

    .thirdWrap
      position absolute
      width 100%
      left 0
      bottom 3.1rem
      height .4rem
      line-height .4rem
      text-align center
      display flex
      flex-flow row nowrap
      //align-items center
      justify-content center
      .itemWrap
        height .4rem
        border-right .01rem solid #979797
        display inline-block
        text-align center
        //padding 0 .4rem

        &:last-child
          border-right none
        >.item
          height .4rem
          padding 0 .6rem
          //position relative
          //top -.5rem
          .icon
            position relative
            top .5rem
            display inline-block
            width .4rem
            height .4rem
          >.name
            text-align center
            height .4rem
            color #7F7F7F
</style>

