import HXRequest from "./request"
import { baseURL, TIME_OUT } from "./request/config"

const hxRequest = new HXRequest({
  baseURL,
  timeout: TIME_OUT,
  hooks: {}
})
export default hxRequest
