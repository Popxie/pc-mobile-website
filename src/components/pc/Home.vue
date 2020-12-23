<!--
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: /pc-mobile/src/components/pc/Home.vue
 * @Date: 2020-12-11 17:37:45
-->
<template>
  <div class='module1-cont'>
      <div class="text-cont">
          <div class="title-style">222-APP</div>
          <div class="desc-style">专注0-12岁儿童阅读与启蒙教育</div>
      </div>
      <img class="qr-icon" :src="qrImg" alt="">
      <img class="mobile-icon" :src="mobileImg" alt="">
      <div class="icon-list-cont">
          <div class="icon-item" v-for="(item, index) in iconList" :key="index">
              <img :src="item.imgUrl" alt="">
              <div v-html="item.desc" class="icon-desc"></div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    components:{},
    data() {
      return {}
    },
    computed: {},
    methods: {},
    created() {}
  }
</script>

<style lang='scss' scoped>
  .module1-cont {
    width: 1920px;
    background-image: url('https://cdn.hhdd.com/frontend/as/i/9d405e9e-7dfe-57ce-940c-95d8462f49c1.png');
    background-size: (100% 100%);
    height: 798px;
    position: relative;
    .text-cont {
        position: absolute;
        top: 170px;
        left: 360px;
        color: #ffffff;
        .title-style {
            font-size: 48px;
            font-weight: 500;
            height: 67px;
            line-height: 67px;
        }
        .desc-style {
          font-size: 24px;
          margin-top: 10px;
          opacity: .8;
        }
    }
  }
</style>