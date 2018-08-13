<template>
  <div>
    <div class="m-exploreMore">

      <div class="line-title">
        <div class="inner">更多精彩</div>
      </div>

      <div class="content" v-for="(item,index) in detail.findMore">
        <div class="topicItem">
          <div class="imgContainer pic1">
            <img :src="item.itemPicUrl" alt="图片">
          </div>
          <!--<div class="right">
            <img src="//yanxuan.nosdn.127.net/14992514239860839.jpg?" alt="右边两个小图片">
            <img src="//yanxuan.nosdn.127.net/14992514267620840.jpg?" alt="右边两个小图片">
          </div>-->
          <div class="desc">夏天是出游的季节，进入7月，好像大家都开启了度假模式。</div>
        </div>
      </div>
    </div>
    <div class="marginBottom"></div>
  </div>

</template>

<script>
  import '../../common/stylus/DetailFindMore.styl'

  export default {
    props: {
      detail: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
