import store from '@/store/index.ts'
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { loginByUsername } from '@/api/login.ts'

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

  @Mutation
  SET_USERNAME(userName: string) {
    this.userName = userName
  }
  SET_NAME(name: string) {
    this.name = name
  }
  SET_TOKEN(token: string) {
    this.token = token
  }
  SET_USERID(userId: string) {
    this.userId = userId
  }

  @Action
  public async loginByName(userInfo: UserInfo) {
    const username = userInfo.username.trim()
    const data =  await loginByUsername(username, userInfo.password)
    return data
  }
}

export const UserModule = getModule(User)