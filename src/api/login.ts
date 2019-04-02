import request from '@/utils/request'
import { Base64 } from 'js-base64'

/**
 * 登录接口
 * username
 * password
 */
export const loginByUsername = (username: string, password: string) => {
  // password base64加密
  password = Base64.encode(password)
  const data = {
    username,
    password
  };
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

/**
 * 通过token获取用户信息
 * token
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
