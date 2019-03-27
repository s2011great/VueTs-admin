<template>
  <div class="container">
    <div class="sidebar-container">
      <Sidebar></Sidebar>
    </div>
    <div class="main-container">
      <div class="navbar"></div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from './components/sidebar/index.vue'
@Component({
  components: {
    Sidebar,
  },
})
export default class Layout extends Vue {
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
      .main {
        width: 100%;
        height: 1000px;
      }
    }
  }
</style>
