<!--
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: /kada-official-web/src/App.vue
 * @Date: 2020-12-11 10:06:51
-->
<template>
  <div id="app" :class="{'l-maxwidth': isMobile}">
    <router-view></router-view>
  </div>
</template>

<script>
import { isMobile } from '@/utils/methods.js'
console.log('isMobile: ', isMobile)

export default {
  name: 'App',
  components: {},
  computed: {
    isMobile () {
      return isMobile
    }
  },
  created() {
    window.addEventListener('resize', function() {
      // console.log(2222)
    }, false);
  },
  mounted() {
  }
}
</script>

<style>
#app {
  height: 100%;
  color: #333;
  margin: 0 auto;
}
</style>
