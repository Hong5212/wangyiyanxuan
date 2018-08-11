<template>
  <div>
    <div>
      <div class="header">
        <a class="logo">网易严选</a>
        <div class="search">
          <i class="iconfont icon-xingtaiduICON_sousuo--"></i>
          <span class="placeholder">搜索商品, 共11781款好物</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*头部*/
  .header
    padding 0.3rem 0.16rem
    display flex
    align-items center
    .logo
      width 1.38rem
      height 0.4rem
      margin-right 0.2rem
      background url("../../common/imgs/logo.png") no-repeat
      background-size contain
      background-position center
      text-indent -9999px
    .search
      width 5.32rem
      height 0.56rem
      background-color #ededed
      border-radius .10667rem
      color #666
      display flex
      align-items center
      justify-content center
      .iconfont
        margin-right 0.05rem
</style>
