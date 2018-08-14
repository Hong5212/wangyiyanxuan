<template>
  <div class="shopCartWrap">
    <!--购物车headerTop-->
    <div class="m-hd">
      <div class="m-cartHd">
        <div class="logo">购物车</div>
        <div class="right">
          <a class="cart-coupon" href="javascript:;">领券</a>
        </div>
      </div>
    </div>
    <!--服务质量-->
    <ul class="m-servicePolicy">
      <li class="item">
        <span>30天无忧退货</span>
      </li>
      <li class="item">
        <span>48小时快速退款</span>
      </li>
      <li class="item">
        <span>满88元免邮费</span>
      </li>
    </ul>
    <!--购物车大logo和登录-->
    <div class="m-defaultPage m-defaultPage-noCart">
      <div class="container">
        <div class="img"></div>
        <div class="txt">
          <div class="noCart-login">
            <div class="noCart-title">去添加点什么吧</div>
            <div class="noCart-btn">登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import '../../common/stylus/shopCart.styl'

  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .m-hd
    bottom-border-1px(#ccc)
</style>

