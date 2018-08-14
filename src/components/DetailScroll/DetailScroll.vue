<template>
  <div class="m-exploreChannels">
    <div class="list">
      <div class="item" v-for="(item,index) in scroll">
        <div class="imgContainer">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="rbGradient">
          <div class="topNum">{{item.articleCount}}</div>
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  import '../../common/stylus/detailScroll.styl'

  export default {
    props: {
      scroll: Array
    },

    mounted() {
      new BScroll('.m-exploreChannels', {
        scrollX: true,
        click: true,
        eventPassthrough: 'vertical' // 垂直滑动(事件转移)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
