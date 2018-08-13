<template>
  <div class="detailWrap">
    <ShiwuHeader/>
    <!--轮播图-->
    <div class="swiper-container" v-if="detail.banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in detail.banner" :key="index">
          <img :src="item.picUrl">
          <div class="content">
            <div class="subTitle">{{item.subTitle}}</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--文章-->
    <DetailScroll :scroll="detail.column"/>
    <DetailItem :detail="detail"/>
    <!--<DetailLook/>-->
    <DetailFindMore :detail="detail"/>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader'
  import DetailScroll from '../../components/DetailScroll/DetailScroll'
  import DetailItem from '../../components/DetailItem/DetailItem'
  // import DetailLook from '../../components/DetailLook/DetailLook'
  import DetailFindMore from '../../components/DetailFindMore/DetailFindMore'


  export default {
    mounted() {
      this.$store.dispatch('getDetail', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {})
        })
      })
    },

    computed: {
      ...mapState(['detail'])
    },

    components: {
      ShiwuHeader,
      DetailScroll,
      DetailItem,
      // DetailLook,
      DetailFindMore
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detailWrap
    background-color #f4f4f4
    margin-bottom 3rem
  /*轮播图*/
    .swiper-container
      background-color #fff
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          padding .25rem .15rem
          box-sizing border-box
          img
            display block
            width 100%
            text-align center
            padding-bottom .1rem
          .content
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            display flex
            align-items center
            justify-content center
            flex-direction column
            width 5rem
            height 2rem
            background-color rgba(255, 255, 255, .9)
            .subTitle
              position relative
              font-size .2rem
              color #7f7f7f
              line-height .4rem
              padding 0 .1rem
            .title
              font-size .35rem
              line-height .64rem
              color #333
              margin-top .21rem
              font-weight 700
            .desc
              font-size .3rem
              color #333
              line-height .48rem
              margin-top .05rem


</style>

