<template>
  <div v-if="!item.hidden&&item.children">
    <!-- 一层菜单目录 -->
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <a :href="onlyOneChild.path" target="_blank" @click="clickLink(onlyOneChild.path, $event)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          {{ onlyOneChild.meta.title }}
        </el-menu-item>
      </a>
    </template>
    <!-- 多级菜单目录 -->
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <span v-if="item.meta" slot="title">{{ item.meta.title }}</span>
      </template>
      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="child.path"
          :base-path="resolvePath(child.path)"/>
        <a v-else :href="child.path" :key="child.name" target="_blank" @click="clickLink(child.path, $event)">
          <el-menu-item :index="resolvePath(child.path)">
            {{ child.meta.title }}
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
  // prop
  @Prop({ required: true }) private item!: Object
  @Prop({ default: '' }) private basePath!: String
  // data
  private onlyOneChild: Object = {}

  // methods
  /***
   * 计算传入的路由是否有需要显示的菜单
   * 
   * @param children: Array<{ hidden: Boolean }>
   * @param parent: Object
   */
  private hasOneShowingChild(children: Array<{ hidden: Boolean }>, parent: Object) {
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
  private clickLink(routePath: string, e: any) {
    e.preventDefault()
    const path = this.resolvePath(routePath)
    this.$router.push(path)
  }
}
</script>

