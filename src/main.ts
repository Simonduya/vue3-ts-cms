import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "normalize.css"
import "./assets/css/index.less"
// import "./service/axios"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// import "./service/axios_demo"
// import hxRequest from "./service/"
import { setupStore } from "./store"
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
setupStore()
app.mount("#app")
// console.log(process.env.VUE_APP_BASE_URL)

// hxRequest.request({
//   url: "/home/multidata",
//   method: "GET"
// })
