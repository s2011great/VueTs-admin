<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span v-if="index == levelList.length - 1" class="no-redirect">{{ item.meta.title }}</span>
      <a v-else @click="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'

@Component({
  name: 'Breadcrumb'
})
export default class Breadcrumb extends Vue {
  // data
  private levelList: object[] = []

  // 监听$route
  @Watch('$route')
  onRouteChanged() {
    this.getBreadcrumb()
  }

  // created生命周期函数
  created() {
    this.getBreadcrumb()
  }

  // methods
  // 利用$route.matched 获取嵌套的路径片段
  getBreadcrumb() {
    this.levelList = this.$route.matched.filter(item => item.meta && item.meta.title)
  }
  // 跳转link函数
  handleLink(item: Route) {
    this.$router.push(item.path)
  }
}
</script>
<style lang="scss" scoped>
.el-breadcrumb {
  line-height: 50px;
  display: inline-block;
  margin-left: 8px;
  font-size: 18px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
