import axios, { AxiosInstance } from 'axios'

class Http {
  instance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost/',
      // baseURL: 'http://localhost:3000/',
    })
  }
}

const http = new Http().instance

export default http
