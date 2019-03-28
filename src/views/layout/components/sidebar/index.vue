<template>
  <el-scrollbar class="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :collapse="isCollapse"
      :default-active="$route.path"
      :default-openeds="openeds"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in menus" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'
import { MenuModule } from '@/store/menu/index.ts'
import { AppModule } from '@/store/app/index.ts'
@Component({
  components: {
    SidebarItem
  }
})
export default class Sidebar extends Vue {
  // data
  private openeds = []
  // computed
  get isCollapse() {
    return !AppModule.sidebar.opened
  }
  get menus() {
    return MenuModule.menus
  }
}
</script>
<style lang="scss" scoped>
  .scrollbar-wrapper {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
    .el-menu--collapse {
      width: 100%;
      height: 100%;
      a {
        display: inline-block;
        width: 100%;
        overflow: hidden;
      }
    }
  }
</style>
