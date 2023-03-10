import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  redirect: '/rentHouseInfo'
},
{
  path: '/init',
  name: 'Init',
  component: () => import('@/view/init/index.vue')
},
{
  path: '/rentHouseInfo',
  name: 'rentHouseInfo',
  component: () => import('@/view/house/rentHouseInfo.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
