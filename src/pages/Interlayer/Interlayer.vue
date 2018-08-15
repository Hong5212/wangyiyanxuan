<template>
  <div class="interlayer">
    <div class="g-bd">
      <div class="g-row">
        <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
        <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg">
      </div>
      <div class="g-row">
        <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg">
        <a class="downloadBtn" href="//m.you.163.com/downloadapp?_stat_click_count=downloadbtn&ochannel=aos_pd_12">下载App 立即领取</a>
        <router-link class="backWapBtn" to="/home">继续使用触屏版浏览</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*封面*/
  .interlayer
    width 100%
    height 100%
    background #eee
    .g-bd
      .g-row
        position relative
        img
          vertical-align top
          width 100%
        .downloadBtn
          text-indent -99rem
          width 4.32rem
          height .98rem
          left 1.55rem
          top .96rem
          position absolute
          display block
        .backWapBtn
          width 2.54rem
          height .3rem
          position absolute
          left 50%
          transform translateX(-50%)
          top 53%
          text-indent -99rem
</style>
