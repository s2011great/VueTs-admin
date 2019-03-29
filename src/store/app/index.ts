import store from '@/store/index'
import {getModule, VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import cookie from 'js-cookie'

interface Sidebar {
  opened: boolean
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule {
  public sidebar: Sidebar = {
    // 初始化opened，从cookie中获取sidebarStatus
    opened: cookie.get('sidebarStatus')? !!+cookie.get('sidebarStatus') : true
  }

  // opened状态切换，并setcookie 'sidebarStatus'
  @Mutation
  private TOGGLE_SIDEBAR() {
    this.sidebar.opened = !this.sidebar.opened
    if (this.sidebar.opened) {
      cookie.set('sidebarStatus', '1')
    } else {
      cookie.set('sidebarStatus', '0')
    }
  }

  // 切换侧边栏显示/隐藏
  @Action({commit: 'TOGGLE_SIDEBAR'})
  public toggleSideBar() {
    return
  }
}

export const AppModule = getModule(App)