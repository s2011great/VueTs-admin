import router from '@/router/index.ts'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path !== '/login') {
    next({path: '/home'})
    NProgress.done()
  } else {
    next({path: '/login'})
    NProgress.done()
  }
})