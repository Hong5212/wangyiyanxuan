<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="this.$route.meta.isShowFooterGuide"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
    position relative
</style>
