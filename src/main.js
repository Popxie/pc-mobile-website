/*
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: /kada-official-web/src/main.js
 * @Date: 2020-12-12 23:23:28
 */
import Vue from 'vue'
import App from './App.vue'
import router from './route'

import { Button, Select } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './style/reset.scss'

import '@/assets/js/flexible.js'

const compArr = [
  Button,
  Select
]
compArr.forEach(item => {
  Vue.use(item)
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
