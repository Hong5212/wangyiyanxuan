<template>
  <div class="m-newWapUserGiftModal" v-if="isMask">
    <div class="mask"></div>
    <i class="icon-modalClose close" @click="isMask = false"></i>
    <div class="wrap">
      <div class="modal">
        <div class="title">
          <span class="titleContent">新人专享礼</span>
        </div>
        <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
        <div class="m-newUserItem">
          <img src="http://yanxuan.nosdn.127.net/09f21a0f79a13574f06f635fe3942a28.jpg?imageView&quality=85&thumbnail=232y232" alt="">
          <div class="content">
            <div class="itemName">休闲复古男式慢跑鞋</div>
            <div class="manu">
              <i class="manuTag">自由自在运动</i>
            </div>
            <div class="price">
              <span class="retailPrice">￥289.00</span>
              <span class="comparePrice">￥599.00</span>
            </div>
          </div>
        </div>
        <div class="actCouponBtn">
          <span>领券立减￥34.00</span>
        </div>
        <a class="linkBtn" href="javascript:;">查看更多特惠商品</a>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../common/stylus/mask.styl'

  export default {
    data(){
      return{
        isMask: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
