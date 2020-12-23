/*
 * @Description: 路由配置入口
 * @Author: xiehuaqiang
 * @FilePath: /kada-official-web/src/route/index.js
 * @Date: 2020-12-10 10:36:05
 */
import Vue from 'vue'
import Router from 'vue-router'
import { isMobile } from '../utils/methods'

Vue.use(Router)

console.log('isMobile1: ', isMobile)
const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: () => import('../components/pc/404.vue')
    },
    {
      path: '/',
      redirect: isMobile ? '/m/about-us' : '/p/about-us'
    },
    {
      path: '/m',
      meta: { type: 'mobile' },
      component: () => import('../components/mobile/Index.vue'),
      children: [
        {
          path: 'home',
          meta: { type: 'mobile' },
          component: () => import('../components/mobile/Home.vue'),
        },
        {
          path: 'about-us',
          meta: { type: 'mobile' },
          component: () => import('../components/mobile/AboutUs.vue'),
        },
      ]
    },
    {
      path: '/p',
      component: () => import('../components/pc/Index.vue'),
      children: [
        {
          path: 'home',
          component: () => import('../components/pc/Home.vue'),
        },
        {
          path: 'about-us',
          component: () => import('../components/pc/AboutUs.vue'),
        }
      ]
    }
  ]
})
/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */

router.beforeEach((to, from, next) => {
  // console.log('to: ', to)
  let path = ''
  // 当为移动端想访问pc端时，强制路由保持当前路由
  if (isMobile && to.meta.type !== 'mobile') {
    if (to.path.indexOf('/p/') !== -1) {
      path = to.path.replace('/p/', '/m/')
      return next({ path })
    }
  } else if (!isMobile && to.meta.type === 'mobile') {
    path = to.path.replace('/m/', '/p/')
    return next({ path })
  }
  next()
})

export default router