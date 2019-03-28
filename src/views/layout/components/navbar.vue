<template>
  <div  class="navbar">
    <hamburger class="hamburger-container" :is-active="isActive" :toggle-click="toggleClick"></hamburger>
  </div>
</template>
<script lang="ts">
import Hamburger from '@/components/Hamburger/index.vue'
import { Vue, Component } from 'vue-property-decorator'
import { AppModule } from '@/store/app/index.ts'

@Component({
  name: 'Navbar',
  components: {
    Hamburger
  }
})
export default class Navbar extends Vue {
  // computed
  get isActive() {
    return !AppModule.sidebar.opened
  }
  // methods
  // 切换侧边栏显示/隐藏
  toggleClick() {
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
}
</style>
