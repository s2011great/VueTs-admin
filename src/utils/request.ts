import axios from 'axios'

const baseURL = ''
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