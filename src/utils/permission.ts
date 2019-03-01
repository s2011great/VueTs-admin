import router from '@/router/index.ts'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path !== '/login' && to.path !== '/home') {
    next({path: '/login'})
    NProgress.done()
  } else {
    next()
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})