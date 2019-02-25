import { Base64 } from 'js-base64'
import request from '@/utils/request'

export const loginByUsername = (username: string, password: string) => {
  // password base64加密
  password = Base64.encode(password)
  const data = {
    username,
    password
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}