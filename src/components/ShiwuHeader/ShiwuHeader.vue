<template>
  <div class="header">
    <div class="row">
      <router-link class="home" to="/home"></router-link>
      <!--<a class="home" href="javascript:;"></a>-->
      <a class="logo" href="javascript:;"></a>
      <div class="right">
        <a class="search" href="javascript:;"></a>
        <!--<a class="cart" href="javascript:;"></a>-->
        <router-link class="cart" to="/shopCart"></router-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  /*头部*/
  .header
    position fixed!important
    width 100%
    height .87rem
    background #fafafa
    z-index 100
    bottom-border-1px(#ccc)
    .row
      padding .16rem .16rem 0 .24rem
      display flex
      a
        display block
      .home
        width .5rem
        height .5rem
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
        background-position-y -0.75rem
        background-size 1.8rem
      .logo
        width 1.92rem
        height .54rem
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
        background-position-y -1.7rem
        background-size 2rem 5rem
        margin-left 1.6rem
        background-repeat no-repeat
      .right
        width 1.48rem
        height .64rem
        margin -.1rem 0 0 1.4rem
        > a
          width .7rem
          height .7rem
        > .search
          float left
          background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
          background-position -.1rem -4.55rem
          background-size 2.3rem 5.3rem
        > .cart
          float right
          background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
          background-position -.1rem -.1rem
          background-size 2.3rem 5.3rem


</style>
