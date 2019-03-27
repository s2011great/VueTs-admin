import store from '@/store/index'
import {getModule, VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { asyncRoutes } from '@/router/index'


/**
 * 菜单和路由表name是否相等
 * @param menus 菜单列表
 * @param route 前端路由
 */
function hasPermission(menus: [], route: any) {
  if (route.name) {
    return menus.some((menu: {target: string}) => route.name === menu.target)
  } else {
    return true
  }
}
/**
 * 依据后端返回的菜单列表，过滤前端路由
 * @param asyncRouterMap 前端路由表
 * @param menus 后端返回的菜单
 */
function filterAsyncRouter(asyncRouterMap: any, menus: []) {
  const accessedRouters = asyncRouterMap.filter((route: any) => {
    if (hasPermission(menus, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, menus)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

@Module({ dynamic: true, store, name: 'menu' })
class Menu extends VuexModule {
  public routers: [] = []

  get menus() {
    return this.routers
  }

  @Mutation
  private SET_ROUTERS(routers: []) {
    this.routers = routers
  }

  @Action({ commit: 'SET_ROUTERS' })
  public async generateMenus(menus: []) {
    const accessedRouters = filterAsyncRouter(asyncRoutes, menus)
    return accessedRouters
  }
}

export const MenuModule = getModule(Menu)