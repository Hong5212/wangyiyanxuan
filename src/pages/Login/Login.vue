<template>
  <div>
    <ShiwuHeader/>
    <!--登录/注册-->
    <!--on表示显示，off表示关闭-->
    <!--<div class="off">-->
      <section class="loginContainer">
        <div class="loginInner">
          <div class="login_header">
            <!--<h2 class="login_logo">网易严选</h2>-->
            <div class="login_header_title">
              <a href="javascript:;" :class="loginType === 0?'on':''"
              @click="isLogin(0)">短信登录</a>
              <a href="javascript:;" :class="loginType === 1?'on':''"
              @click="isLogin(1)">密码登录</a>
            </div>
          </div>
          <div class="login_content">
            <form>
              <div :class="loginType === 0?'on':''">
                <section class="login_message">
                  <input type="tel" maxlength="11" placeholder="手机号">
                  <button disabled="disabled" class="get_verification" >获取验证码</button>
                </section>
                <section class="login_verification">
                  <input type="tel" maxlength="8" placeholder="验证码">
                </section>
                <section class="login_hint">
                  温馨提示：未注册网易严选帐号的手机号，登录时将自动注册，且代表已同意
                  <a href="javascript:;">《用户服务协议》</a>
                </section>
              </div>

              <div :class="loginType === 1?'on':''">
                <section>
                  <section class="login_message">
                    <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
                  </section>
                  <section class="login_verification">
                    <input type="password" maxlength="8" placeholder="密码">
                    <!--<div class="switch_button off">-->
                      <!--<div class="switch_circle"></div>-->
                      <!--<span class="switch_text">abc</span>-->
                    <!--</div>-->
                  </section>
                </section>
              </div>
              <button class="login_submit">登录</button>
            </form>
            <a href="javascript:;" class="about_us">关于我们</a>
          </div>
          <!--<a href="javascript:" class="go_back">
            <i class="iconfont icon-jiantou2"></i>
          </a>-->
        </div>
      </section>
    <!--</div>-->
  </div>
</template>

<script>
  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader'

  export default {
    data(){
      return{
        loginType: 0 // 0是短信登录，1是密码登录
      }
    },

    methods: {
      isLogin(index){
        this.loginType = index
      }
    },

    components: {
      ShiwuHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*登录/注册*/
  .loginContainer
    width 100%
    height 100%
    background #ffffff
    padding-top 1rem
    .loginInner
      padding-top 0.6rem
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 0.4rem
          font-weight bold
          color #b4282d
          text-align center
        .login_header_title
          padding-top 0.4rem
          text-align center
          > a
            color #333333
            font-size 0.3rem
            padding-bottom 0.1rem
            &:first-child
              margin-right 0.4rem
            &.on
              color #b4282d
              font-weight 7rem //700
              border-bottom 0.02rem solid #b4282d
      .login_content
        margin-top .4rem
        > form
          > div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 0.1rem
              box-sizing border-box
              border 0.01rem solid #dddddd
              border-radius 0.04rem
              outline 0
              font 4rem 0.14rem Arial

            .login_message
              position relative
              margin-top 0.16rem
              height 0.8rem
              font-size 0.14rem
              background #ffffff
              .get_verification
                position absolute
                top 50%
                right 0.1rem
                transform translateY(-50%)
                border 0
                color #cccccc
                font-size 0.14rem
                background transparent
                &.right_phone
                  color #000000

            .login_verification
              position relative
              margin-top 0.16rem
              height 0.8rem
              font-size 0.14rem
              background #ffffff
              .switch_button
                font-size 0.24rem
                border 0.01rem solid #dddddd
                border-radius 0.6rem
                transition background-color .3, border-color .3s
                padding 0 0.06rem
                width 0.7rem
                height 0.3rem
                line-height 0.16rem
                color #ffffff
                position absolute
                top 50%
                right 0.1rem
                transform translateY(-50%)
                &.off
                  background #ffffff
                  .switch_text
                    font-size .25rem
                    line-height .3rem
                    float right
                    color #dddddd
                &.on
                  background #b4282d
                > .switch_circle
                  position absolute
                  top -0.01rem
                  left -0.01rem
                  width 0.3rem
                  height 0.3rem
                  border 0.01rem solid #dddddd
                  border-radius 50%
                  background #ffffff
                  box-shadow 0 0.02rem 0.04rem 0 rgba(0, 0, 0, .1)
                  transiton transform .4s
                  &.right
                    transform translateX(0.26rem)
            .login_hint
              margin-top 0.12rem
              color #999999
              font-size 0.14rem
              line-height 0.4rem
              > a
                color #b4282d
          .login_submit
            display block
            width 100%
            height 0.8rem
            margin-top 0.3rem
            border-radius 0.04rem
            background #b4282d
            color #ffffff
            text-algin center
            font-size 0.3rem
            line-height 0.8rem
            border 0
        .about_us
          display block
          font-size 0.12rem
          margin-top 0.2rem
          text-align center
          color #999999
</style>
