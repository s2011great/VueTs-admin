import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

// 注册SvgIcon组件
Vue.component('svg-icon', SvgIcon)

const requireAll = ( requireContext: any ) => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)