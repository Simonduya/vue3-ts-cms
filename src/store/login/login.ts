import { Module } from "vuex"
import { ILoginState } from "./types"
import { IRootState } from "../types"
import localCache from "@/utils/cache"
// import { accountLoginRequest, requestUserInfoById } from "@/service/login/login"
import { mapMenusToRoutes } from "@/utils/map-menus"

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
      const routes = mapMenusToRoutes(userMenus)

      // // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute("main", route)
      })

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
        cellphone: 123456789,
        createAt: "2023-07-06T10:20:26.0000X",
        enable: 1,
        id: 1,
        name: "HX",
        realname: "hx",
        department: {}
      }
      commit("changeUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)

      // 3.请求用户菜单
      // const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      // const userMenus = userMenusResult.data
      const userMenus: any[] = [
        {
          id: 1,
          name: "系统总览",
          type: 1,
          sort: 1,
          url: "/main/analysis",
          icon: "el-icon-monitor",
          children: [
            {
              parentId: 1,
              id: 11,
              name: "overview",
              type: 2,
              sort: 106,
              url: "/main/analysis/overview",
              icon: "el-icon-monitor",
              children: null
            },
            {
              parentId: 38,
              id: 12,
              name: "dashboard",
              type: 2,
              sort: 107,
              url: "/main/analysis/dashboard",
              icon: "el-icon-monitor",
              children: null
            }
          ]
        },
        {
          id: 2,
          name: "系统管理",
          type: 1,
          url: "/main/system",
          icon: "el-icon-setting",
          children: [
            {
              parentId: 2,
              id: 21,
              name: "department",
              type: 2,
              sort: 108,
              url: "/main/system/department",
              icon: "el-icon-monitor",
              children: null
            },
            {
              parentId: 1,
              id: 22,
              name: "nu",
              type: 2,
              sort: 109,
              url: "/main/system/menu",
              icon: "el-icon-monitor",
              children: null
            },
            {
              parentId: 2,
              id: 23,
              name: "role",
              type: 2,
              sort: 108,
              url: "/main/system/role",
              icon: "el-icon-monitor",
              children: null
            },
            {
              parentId: 1,
              id: 24,
              name: "user",
              type: 2,
              sort: 109,
              url: "/main/system/user",
              icon: "el-icon-monitor",
              children: null
            }
          ]
        },
        {
          id: 3,
          name: "商品中心",
          type: 1,
          url: "/main/product",
          icon: "el-icon-goods",
          children: [
            {
              parentId: 3,
              id: 31,
              name: "category",
              type: 2,
              sort: 106,
              url: "/main/product/category",
              icon: "el-icon-monitor",
              children: null
            },
            {
              parentId: 3,
              id: 32,
              name: "goods",
              type: 2,
              sort: 107,
              url: "/main/product/goods",
              icon: "el-icon-monitor",
              children: null
            }
          ]
        },
        {
          id: 4,
          name: "随便聊聊",
          type: 1,
          url: "/main/story",
          icon: "el-icon-chat-line-round",
          children: [
            {
              parentId: 4,
              id: 41,
              name: "chat",
              type: 2,
              sort: 106,
              url: "/main/story/chat",
              icon: "el-icon-monitor",
              children: null
            },
            {
              parentId: 4,
              id: 42,
              name: "list",
              type: 2,
              sort: 107,
              url: "/main/story/list",
              icon: "el-icon-monitor",
              children: null
            }
          ]
        }
      ]
      commit("changeUserMenus", userMenus)
      localCache.setCache("userMenus", userMenus)

      // 4.跳到首页
      router.push("/main")
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}

export default loginModule
