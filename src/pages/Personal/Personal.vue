<template>
  <div>
    <!--头部-->
    <ShiwuHeader/>
    <!--登陆类型的包裹-->
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
  import '../../common/stylus/personal.styl'

  export default {
    components: {
      ShiwuHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>

