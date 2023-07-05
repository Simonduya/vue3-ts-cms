import { Module } from "vuex"
import { ILoginState } from "./types"
import { IRootState } from "../type"
import localCache from "@/utils/cache"
// import { accountLoginRequest, requestUserInfoById } from "@/service/login/login"
import { IAccount } from "@/service/login/type"
import router from "@/router"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // console.log('注册动态路由')

      // // userMenus => routes
      // const routes = mapMenusToRoutes(userMenus)

      // // 将routes => router.main.children
      // routes.forEach((route) => {
      //   router.addRoute('main', route)
      // })

      // // 获取用户按钮的权限
      // const permissions = mapMenusToPermissions(userMenus)
      // state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑 TODO
      // const loginResult = await accountLoginRequest(payload)
      // const { id, token } = loginResult.data
      const token = "token123456"
      const id = 1
      console.log(id, payload)

      commit("changeToken", token)
      localCache.setCache("token", token)

      // 发送初始化的请求(完整的role/department)
      // dispatch('getInitialDataAction', null, { root: true })

      // 2.请求用户信息
      // const userInfoResult = await requestUserInfoById(id)
      // const userInfo = userInfoResult.data
      const userInfo = {
        test: "test"
      }
      commit("changeUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)

      // 3.请求用户菜单
      // const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      // const userMenus = userMenusResult.data
      const userMenus: any[] = []
      commit("changeUserMenus", userMenus)
      localCache.setCache("userMenus", userMenus)

      // 4.跳到首页
      router.push("/main")
    }
  }
}

export default loginModule
