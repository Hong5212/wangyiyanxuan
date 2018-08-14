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
                    <input type="tel" maxlength="8" placeholder="密码">
                    <div class="switch_button off">
                      <div class="switch_circle"></div>
                      <span class="switch_text">abc</span>
                    </div>
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

  import '../../common/stylus/register.styl'

  export default {
    data(){
      return{
        loginType: 0 // 0是短信，1是密码
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
</style>
