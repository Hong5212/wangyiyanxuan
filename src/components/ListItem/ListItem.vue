<template>
  <div style="margin: 1.17rem 0">
    <!--<div v-for="(category, index) in categories" :key="index">-->
      <div class="m-subCateList" v-if="categories[activeIndex]">
        <div class="banner">
          <img :src="categories[activeIndex].bannerUrl" alt="">
        </div>
        <div class="cateList">
          <div class="hd">
        <span class="text">
          <span>{{categories[activeIndex].name}}分类</span>
        </span>
          </div>
          <ul class="list">
            <li class="cateItem" v-for="(itemCate, index) in categories[activeIndex].subCateList" :key="index">
              <a href="javascript:;">
                <div class="cateImgWrapper">
                  <img :src="itemCate.wapBannerUrl" alt="">
                </div>
                <div class="name">{{itemCate.name}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  <!--</div>-->
</template>

<script>
  export default {
    props: {
      categories: Array,
      activeIndex: Number
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*分类页面的右侧列表*/
  .m-subCateList
    margin-left 1.4rem
    padding .4rem .4rem .28rem
    .banner
      position relative
      width 100%
      height 2.56rem
      display table
      background center no-repeat #f4f4f4
      background-size cover
      border-radius .04rem
      >img
        width 100%
        height 100%
    .cateList
      >.hd
        height 1.4rem
        line-height 1.4rem
        text-align center
        font-size .16rem
        color #333
        .text
          position relative
          &:before,&:after
            position absolute
            content: ''
            top 0
            bottom 0
            margin auto
            height .01rem
            width .53rem
            background-color #d9d9d9
            transform-origin 50% 100% 0;
          &:before
            box-sizing border-box
            text-size-adjust 100%
            left -.7rem
          &:after
            right -.7rem
      .list
        .cateItem
          display inline-block
          margin-right .2rem
          font-size 0
          width 1.5rem
          vertical-align top
          .cateImgWrapper
            width 1.5rem
            height 1.5rem
            >img
              width 100%
              height 100%
          .name
            height .96rem
            font-size .16rem
            color #333
            text-align center
            line-height .45rem
</style>
