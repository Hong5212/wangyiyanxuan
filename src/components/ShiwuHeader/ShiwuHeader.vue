<template>
  <div class="header">
    <div class="row">
      <a class="home" href="javascript:;"></a>
      <a class="logo" href="javascript:;"></a>
      <div class="right">
        <a class="search" href="javascript:;"></a>
        <a class="cart" href="javascript:;"></a>
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
    position fixed
    width 100%
    height .87rem
    background #fafafa
    z-index 100
    bottom-border-1px(#ccc)
    .row
      padding 0 .16rem 0 .24rem
      display flex
      a
        display block
      .home
        width .9rem
        height .9rem
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
        background-position-y -0.9rem
        background-size 2.3rem
      .logo
        width 2.3rem
        height .72rem
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
        background-position-y -1.7rem
        background-size 2.3rem 5.3rem
        margin-top 0.1rem
        margin-left 0.9rem
      .right
        width 1.6rem
        height .63rem
        margin .11rem 0 0 .8rem
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
