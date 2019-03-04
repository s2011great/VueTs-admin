import store from '@/store/index.ts'
import { Module, VuexModule, Mutation, Action, getModule, MutationAction } from 'vuex-module-decorators'
import { loginByUsername, getUserInfoByToken } from '@/api/login.ts'
import { setToken, getToken, removeToken } from '@/utils/auth.ts'

interface UserInfo {
  username: string;
  password: string
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule {
  public userName: string = ''
  public name: string = ''
  public token: string = ''
  public userId: string = ''
  public roles: [] = []

  @Mutation
  private SET_USERNAME(userName: string) {
    this.userName = userName
  }
  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }
  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }
  @Mutation
  private SET_USERID(userId: string) {
    this.userId = userId
  }

  @MutationAction({mutate: ['name', 'userId', 'roles']})
  public async getUserInfo() {
    const token: string | undefined = getToken()
    if (token === 'undefined') {
      throw new Error('Token is undefined')
    }
    const { data } = await getUserInfoByToken(token)
    console.log(data)
    return {
      name: data.data.name,
      userId: data.data.userId,
      roles: data.data.roles
    }
  }

  @Action({commit: 'SET_TOKEN'})
  public async loginByName(userInfo: UserInfo) {
    const username = userInfo.username.trim()
    const { data } =  await loginByUsername(username, userInfo.password)
    setToken(data.data.token)
    return data.data.token
  }
}

export const UserModule = getModule(User)