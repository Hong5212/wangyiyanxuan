<template>
  <div style="margin-bottom: 1rem">
    <div class="titleGoodGrid" v-for="(goods, index) in goodGrides" :key="index">
      <h3 class="title">{{goods.name}}好物</h3>
      <ul class="list">
        <li class="item" v-for="(good, index) in goods.itemList" :key="index">
          <div class="item-hd">
            <div class="wraper">
              <img :src="good.listPicUrl" alt="图片">
              <div class="desc">{{good.simpleDesc}}</div>
            </div>
          </div>
          <p class="status">居家特惠</p>
          <p class="name">{{good.name}}</p>
          <span class="price">￥{{good.couponPrice}}</span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  //  v-for="(goods, index) in goodGrides" :key="index"
  import '../../common/stylus/goodGrid.styl'

  export default {
    props: {
      goodGrides: Array
    }
  }
</script>

<style scoped>

</style>
