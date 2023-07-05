import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cache"
// import { firstMenu } from "@/utils/map-menus"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    component: () => import("@/views/main/main.vue")
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }

  // console.log(router.getRoutes())
  // console.log(to) // route对象

  if (to.path === "/main") {
    // console.log(firstMenu)
    // return firstMenu.url
  }
})
export default router
