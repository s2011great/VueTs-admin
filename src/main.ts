import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'

// 前端访问权限检测
// tslint:disable-next-line: no-import-side-effect
import '@/utils/permission.ts'
// 全局样式
import '@/styles/index.scss'
// 引入icon组件，全局使用
// <icon-svg icon-class="xxxx" />
// tslint:disable-next-line: no-import-side-effect
import './icons/index.ts'

Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
