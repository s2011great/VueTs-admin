import { Base64 } from 'js-base64'
import request from '@/utils/request'

/**
 * 登录接口
 * 
 * @param username 
 * @param password 
 */
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

/**
 * 通过token获取用户信息
 * 
 * @param token
 */
export const getUserInfoByToken = (token: string | undefined) => {
  return request({
    url: '/info',
    method: 'get',
    params: {
      token
    }
  })
}