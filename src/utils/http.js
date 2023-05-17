import axios, { AxiosInstance } from 'axios'

class Http {
  instance
  constructor() {
    this.instance = axios.create({
      baseURL: 'localhost:3000/',
    })
  }
}

const http = new Http().instance

export default http
