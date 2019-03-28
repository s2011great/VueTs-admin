<template>
  <div class="container" :class="classObj">
    <div class="sidebar-container">
      <sidebar></sidebar>
    </div>
    <div class="main-container">
      <div class="navbar">
        <navbar></navbar>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/app/index.ts'
import Sidebar from './components/sidebar/index.vue'
import Navbar from './components/navbar.vue'
@Component({
  components: {
    Sidebar,
    Navbar,
  },
})
export default class Layout extends Vue {
  // computed
  // sidebar.opened为false，添加hideSidebar class
  get classObj() {
    return {
      hideSidebar: !AppModule.sidebar.opened
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    .sidebar-container {
      position: fixed;
      width: 180px;
      height: 100%;
      top: 0px;
      left: 0px;
      bottom: 0px;
      z-index: 1001;
      overflow-y: auto;
      background-color: #304156;
    }
    .main-container {
      position: relative;
      margin-left: 180px;
      height: 100%;
      .navbar {
        height: 50px;
        width: 100%;
      }
      .main {
        width: 100%;
        /* 100vh - (main-container中除了main之外的高度) */
        min-height: calc(100vh - 50px);
      }
    }
  }
</style>
