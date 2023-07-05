import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// import "./service/axios"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "./service/axios_demo"
import hxRequest from "./service"
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount("#app")
console.log(process.env.VUE_APP_BASE_URL)

hxRequest.request({
  url: "/home/multidata",
  method: "GET"
})
