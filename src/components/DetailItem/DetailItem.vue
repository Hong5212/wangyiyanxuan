<template>
  <div class="m-exploreRcmds" v-if="detail.recommendOne">
    <div class="container">
      <div class="module-title">{{detail.recommendOne.nickname}}</div>
      <div class="m-mainPosItem">
        <div class="imgContainer">
          <div class="topicTag">
            <div class="m-exploreTag">{{detail.recommendOne.typeName}}</div>
          </div>
        </div>
        <div class="topicInfo">
          <div class="line1">
            <div class="title">{{detail.recommendOne.typeName}}</div>
            <div class="price">{{detail.recommendOne.priceInfo}}元起</div>
          </div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.recommendTwo.avatar">
              </div>
              <div class="nickname">{{detail.recommendTwo.nickname}}</div>
            </div>
          </div>
          <div class="line1">
            <div class="title">{{detail.recommendTwo.title}}</div>
          </div>
          <div class="line2">
            <div class="subTitle"
                 v-if="detail.recommendTwo">{{detail.recommendTwo.subTitle}}</div>
          </div>
        </div>
        <div class="minorPic">
          <div class="imgContainer">
            <img :src="detail.recommendTwo.picUrl" alt="">
            <div class="topicTag">
              <div class="m-exploreTag">{{detail.recommendTwo.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.recommendThree.avatar">
              </div>
              <div class="nickname">{{detail.recommendThree.nickname}}</div>
            </div>
          </div>
          <div class="line1">
            <div class="title">{{detail.recommendThree.title}}</div>
          </div>
          <div class="line2">
            <div class="subTitle"
                 v-if="detail.recommendOne">{{detail.recommendOne.subTitle}}</div>
          </div>
        </div>
        <div class="minorPic">
          <div class="imgContainer">
            <img :src="detail.recommendThree.picUrl" alt="">
            <div class="topicTag">
              <div class="m-exploreTag">{{detail.recommendThree.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../common/stylus/detailItem.styl'

  export default {
    props: {
      detail: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
