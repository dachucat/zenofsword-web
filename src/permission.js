import { useUserStore } from '@/pinia/modules/user'
import { useRouterStore } from '@/pinia/modules/router'
import getPageTitle from '@/utils/page'
import router from '@/router'

let asyncRouterFlag = 0

const whiteList = ['Login', 'Init']

const getRouter = async(userStore) => {
  const routerStore = useRouterStore()
  await routerStore.SetAsyncRouter()
  await userStore.GetUserInfo()
  const asyncRouters = routerStore.asyncRouters
  asyncRouters.forEach(asyncRouter => {
    router.addRoute(asyncRouter)
  })
}

async function handleKeepAlive(to) {
  if (to.matched && to.matched.length > 2) {
    for (let i = 1; i < to.matched.length; i++) {
      const element = to.matched[i - 1]
      if (element.name === 'layout') {
        to.matched.splice(i, 1)
        await handleKeepAlive(to)
      }
      // 如果没有按需加载完成则等待加载
      if (typeof element.components.default === 'function') {
        await element.components.default()
        await handleKeepAlive(to)
      }
    }
  }
}

router.beforeEach(async(to, from, next) => {
  const userStore = useUserStore()
  to.meta.matched = [...to.matched]
  handleKeepAlive(to)
  const token = userStore.token
  // 在白名单中的判断情况
  document.title = getPageTitle(to.meta.title)
    next()

})
