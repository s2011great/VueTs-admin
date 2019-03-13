<template>
  <el-scrollbar class="scrollbar-wrapper">
    <el-menu>
      <el-menu-item index="1">
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="7">
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="8">
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="9">
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="10">
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="11">
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="12">
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="13">
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="14">
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="15">
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="16">
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class Sidebar extends Vue {}
</script>
<style lang="scss" scoped>
  .scrollbar-wrapper {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  }
</style>
