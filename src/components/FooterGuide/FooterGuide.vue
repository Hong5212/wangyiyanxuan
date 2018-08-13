<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goTo('/home')" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>

    <a href="javascript:;" class="guide_item" @click="goTo('/detail')" :class="{on: isCurrent('/detail')}">
      <span class="item_icon">
        <i class="iconfont icon-fangkuaidagou-weixuanzhong"></i>
      </span>
      <span>识物</span>
    </a>

    <a href="javascript:;" class="guide_item" @click="goTo('/classify')" :class="{on: isCurrent('/classify')}">
      <span class="item_icon">
        <i class="iconfont icon-chouti"></i>
      </span>
      <span>分类</span>
    </a>

    <a href="javascript:;" class="guide_item" @click="goTo('/shopCart')" :class="{on: isCurrent('/shopCart')}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>

    <a href="javascript:;" class="guide_item" @click="goTo('/personal')" :class="{on: isCurrent('/personal')}">
      <span class="item_icon">
        <i class="iconfont icon-renwu"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>

  export default {

    methods: {
      // 路由切换
      goTo(path){
        return this.$router.replace(path)
      },

      // 高亮显示
      isCurrent(path){
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .footer_guide // footer
    top-border-1px(#ccc)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fafafa
    width 100%
    height 0.97rem
    /*弹性布局*/
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 0.05rem
      color #666666
      &.on
        color #b4282d
      span
        margin 0.06rem
        .iconfont
          font-size 0.3rem
</style>
