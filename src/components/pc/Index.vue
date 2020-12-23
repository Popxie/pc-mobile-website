<!--
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: /kada-official-web/src/components/pc/Index.vue
 * @Date: 2020-12-11 10:41:05
-->
<template>
  <div class='pc-entry-cont'>
    <!-- 头部 -->
    <div class="header-cont"></div>
    <div class="flex-cont fix-cont" :class="{'flex-cont': isAboutUs}">
      <!-- 左侧菜单 -->
      <div class="left-menu" v-if="isAboutUs">
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    components:{},
    data() {
      return {}
    },
    computed: {
      isAboutUs() {
        return this.$route.path ==='/p/about-us'
      }
    },
    methods: {},
    created() {
    }
  }
</script>

<style lang='scss' scoped>
.pc-entry-cont {
  background: #fafafa;
  height: 100%;
  .header-cont {
    height: 75px;
    line-height: 75px;
    background: lightblue;
  }
  .fix-cont {
    height: calc(100% - 75px);
    overflow: hidden;
    overflow-y: scroll;
    padding-top: 45px;
  }
  .flex-cont {
    position: relative;
    height: calc(100% - 75px);
    overflow: hidden;
    overflow-y: scroll;
    padding-top: 45px;
    display: flex;
    justify-content: center;
    .left-menu {
      position: sticky;
      top: 0;
      width: 200px;
      height: 220px;
      margin-right: 11px;
      background: lightblue;
    }
  }
}
</style>