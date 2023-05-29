import axios, { AxiosResponse } from "axios"

axios
  .get("http://123.207.32.32:8000/home/multidata")
  .then((res: AxiosResponse) => {
    console.log(res)
  })
