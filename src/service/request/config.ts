let baseURL = ""
const TIME_OUT = 3000
if (process.env.NODE_ENV === "production") {
  baseURL = "https://coderwhy/org/prod"
} else if (process.env.NODE_ENV === "development") {
  baseURL = "http://123.207.32.32:8000"
} else {
  baseURL = "https://coderwhy/org/test"
}

export { baseURL, TIME_OUT }
