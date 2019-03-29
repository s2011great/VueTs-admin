<template>
  <div  class="navbar">
    <hamburger class="hamburger-container" :is-active="isActive" :toggle-click="toggleClick"></hamburger>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">
      <screenfull class="right-menu-item hover-effect"></screenfull>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { AppModule } from '@/store/app/index.ts'

import Hamburger from '@/components/Hamburger/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Screenfull from '@/components/Screenfull/index.vue'

@Component({
  name: 'Navbar',
  components: {
    Hamburger,
    Breadcrumb,
    Screenfull,
  }
})
export default class Navbar extends Vue {
  // computed
  get isActive() {
    return !AppModule.sidebar.opened
  }
  // methods
  // 切换侧边栏显示/隐藏
  toggleClick(): void {
    AppModule.toggleSideBar()
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 100%;
  .hamburger-container {
    float: left;
    padding: 0 15px;
    font-size: 28px;
    height: 100%;
    line-height: 50px;
    cursor: pointer;
    transition: background 0.8s; // 切换侧边栏显示/隐藏按钮背景颜色动画
    &:hover {
      background: rgba(0, 0, 0, .025);
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    float: right;
    line-height: 50px;
    height: 100%;
    .right-menu-item {
      display: inline-block;
      color: #5a5e66;
      font-size: 22px;
      padding: 0 8px;
      height: 100%;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
  }
}
</style>
