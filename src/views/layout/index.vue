<template>
  <div class="container">
    <div class="sidebar-container">
      <div></div>
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
@Component
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
      width: 200px;
      height: 100%;
      top: 0px;
      left: 0px;
      bottom: 0px;
      z-index: 1001;
      overflow-y: auto;
      background-color: red;
      div {
        width: 100%;
        height: 1600px;
      }
    }
    .main-container {
      position: relative;
      margin-left: 200px;
      height: 100%;
      background-color: green;
      .main {
        width: 100%;
        height: 1000px;
      }
    }
  }
</style>
