import cookie from 'js-cookie'

const TokenKey: string = 'Authorization'

export const setToken = (token: string) => cookie.set(TokenKey, token)

export const getToken = () => cookie.get(TokenKey)

export const removeToken = () => cookie.remove(TokenKey)