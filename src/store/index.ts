import { createStore } from "vuex"
import { IRootState } from "./type"

import login from "./login/login"

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "xxx"
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store
