import axios from 'axios'

const baseURL = 'http://172.16.1.186:3000'
const service = axios.create({
  baseURL,
  timeout: 2000
})

// Request
service.interceptors.request.use(
  (confing) => {
    return confing
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response
service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    Promise.reject(error)
  }
)
export default service