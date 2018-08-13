<template>
  <div class="j-categoryList">
    <!--头部-->
    <div class="hdWraper">
      <div class="m-hd">
        <div class="m-itemCateListHd">
          <div class="m-topSearchIpt ipt">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共11963款好物</span>
          </div>
        </div>
      </div>
    </div>
    <!--左侧导航-->
    <div class="m-cateNavVertWrap">
      <ul class="m-cateNavVert">
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  // import '../../common/stylus/mixins.styl'
  import '../../common/stylus/calssify.styl'

  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .m-hd
    bottom-border-1px(#ccc)
</style>

