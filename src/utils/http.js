import axios, { AxiosInstance } from 'axios'

class Http {
  instance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost/',
    })
  }
}

const http = new Http().instance

export default http
