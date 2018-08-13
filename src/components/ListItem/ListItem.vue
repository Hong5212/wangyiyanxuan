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
  import '../../common/stylus/listItem.styl'

  export default {
    props: {
      categories: Array,
      activeIndex: Number
    }
  }
</script>

<style scoped>

</style>
