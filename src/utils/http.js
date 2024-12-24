import axios, { AxiosInstance } from 'axios'

class Http {
  instance
  constructor() {
    this.instance = axios.create({
      /* When at School */
      // baseURL: 'http://192.168.43.210:3000/',

      /* When at Home */
      baseURL: 'http:/192.168.1.33:3000/',

      // baseURL: 'http://172.20.10.2:3000/',

      headers: {
        Authorization: 'Bearer API_KEY',
        // 'Content-Type': 'application/json',
      },
    })
  }
}

const http = new Http().instance

export default http
