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
        <li class="item" v-for="(category, index) in categories":key="index"
            :class="activeIndex === index ? 'active': ''" @click=active(index)>
          <a class="txt" href="javascript:;">{{category.name}}</a>
        </li>
      </ul>
    </div>
    <!--右侧列表-->
    <ListItem :categories="categories" :activeIndex="activeIndex"/>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import '../../common/stylus/calssify.styl'
  import ListItem from '../../components/ListItem/ListItem'

  export default {
    data() {
      return {
        activeIndex: 0  // 活动的下标
      }
    },

    mounted() {
      this.$store.dispatch('getCategories', () => {
        this.$nextTick(() => {
          new BScroll('.m-cateNavVertWrap',{
            click: true
          })
        })
      })
    },

    methods: {
      active(index){
        this.activeIndex = index
      }
    },

    computed: {
      ...mapState(['categories'])
    },

    components: {
      ListItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .m-hd
    bottom-border-1px(#ccc)
</style>

