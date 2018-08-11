<template>
  <div>
    <div class="home-header">
      <div class="logo-search">
        <a class="logo">网易严选</a>
        <div class="search">
          <i class="iconfont icon-xingtaiduICON_sousuo--"></i>
          <span class="placeholder">搜索商品, 共11781款好物</span>
        </div>
      </div>
      <div class="header-tabs">
        <div class="tab">
            <span v-for="(good, index) in goods" :key="index"
                  :class="{active: index === activeIndex}" @click="active(index)">{{good}}</span>
        </div>
      </div>
    </div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../images/carousel/01.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../images/carousel/02.jpg">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'

  import '../../common/stylus/home.styl'

  export default {
    data() {
      return {
        goods: ['推荐', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食', '餐厨'],
        activeIndex: 0 // 被选中的下标
      }
    },

    mounted() {
      new BScroll('.header-tabs', {
        scrollX: true,
        click: true
      })
      new Swiper ('.swiper-container', {
        loop: true, // 循环

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },

    methods: {
      active(index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
