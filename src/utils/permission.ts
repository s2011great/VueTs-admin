import router from '@/router/index.ts'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from './auth'
import { Route } from 'vue-router'
import { UserModule } from '@/store/user/index.ts'

const whiteList = ['/login']

interface UserInfo {
  name: string
  userId: string
  roles: []
}

router.beforeEach((to: Route, from: Route, next: any) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (UserModule.roles.length === 0) {
        UserModule.getUserInfo().then((userInfo: UserInfo) => {
          next()
        })
      } else {
        
      }
    }
    NProgress.done()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: '/login' })
    }
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})