import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  redirect: '/housedevicetype'
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
},
{
  path: '/housedevicetype',
  name: 'housedevicetype',
  component: () => import('@/view/house/housedevicetype.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
