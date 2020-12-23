<!--
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: /kada-official-web/src/components/mobile/Index.vue
 * @Date: 2020-12-11 18:08:20
-->
<template>
  <div class='m-entry-cont'>
    <!-- 头部 -->
    <div class="header-cont"></div>
    <div class="fix-cont">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  created() {
  }
}
</script>
<style lang='scss' scoped>
.m-entry-cont {
  background: #fafafa;
  height: 100%;
  .header-cont {
    height: 150px;
    line-height: 150px;
    background: lightblue;
  }
}
</style>