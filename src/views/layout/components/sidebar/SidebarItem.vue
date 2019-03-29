<template>
  <div v-if="!item.hidden&&item.children">
    <!-- 一层菜单目录 -->
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <a :href="onlyOneChild.path" target="_blank" @click="clickLink(onlyOneChild.path, $event)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <svg-icon v-if="onlyOneChild.meta && onlyOneChild.meta.icon" :iconClass="onlyOneChild.meta.icon"></svg-icon>
          <span  v-if="onlyOneChild.meta && onlyOneChild.meta.title" slot="title">{{ onlyOneChild.meta.title }}</span>
        </el-menu-item>
      </a>
    </template>
    <!-- 多级菜单目录 -->
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <svg-icon v-if="item.meta && item.meta.icon" :iconClass="item.meta.icon"></svg-icon>
        <span v-if="item.meta && item.meta.title" slot="title">{{ item.meta.title }}</span>
      </template>
      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="child.path"
          :base-path="resolvePath(child.path)"/>
        <a v-else :href="child.path" :key="child.name" target="_blank" @click="clickLink(child.path, $event)">
          <el-menu-item :index="resolvePath(child.path)">
            <svg-icon v-if="child.meta && child.meta.icon" :iconClass="child.meta.icon"></svg-icon>
            <span v-if="child.meta && child.meta.title" slot="title">{{ child.meta.title }}</span>
          </el-menu-item>
        </a>
      </template>
    </el-submenu>
  </div>
</template>
<script lang="ts">
import path from 'path'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Progress } from 'element-ui';
@Component({
    name: 'SidebarItem'
  })
export default class SidebarItem extends Vue {
  // data
  private onlyOneChild: object = {}

  // prop
  @Prop({ required: true }) private item!: object
  @Prop({ default: '' }) private basePath!: string

  // methods
  /***
   * 计算传入的路由是否有需要显示的菜单
   * 
   * @param children: Array<{ hidden: Boolean }>
   * @param parent: Object
   */
  private hasOneShowingChild(children: Array<{ hidden: boolean }>, parent: object) {
    const showingChildren = children.filter(item => {
      if (item.hidden) {
        return false
      } else {
        this.onlyOneChild = item
        return true
      }
    })
    // 只有一个children
    if (showingChildren.length === 1) {
      return true
    }
    // 如果没有children，则将parent赋值与onlyOneChild
    if (showingChildren.length === 0) {
      this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
      return true
    }

    // 其他情况：有多个children，则需要返回false。需要二级目录的菜单组件
    return false
  }
  /***
   * 利用path.resolve获取routePath的绝对地址
   */
  private resolvePath(routePath: string) {
    return path.resolve(this.basePath, routePath)
  }
  /**
   * 菜单点击事件，跳转路由
   *
   *@param routePath 跳转地址
   *@param e 事件对象
   */
  private clickLink(routePath: string, e: Event) {
    e.preventDefault()
    const path = this.resolvePath(routePath)
    this.$router.push(path)
  }
}
</script>

