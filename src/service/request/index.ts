import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"
class HXRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig) {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HXRequest
