<template>
  <div  class="navbar">
    <hamburger class="hamburger-container" :is-active="isActive" :toggle-click="toggleClick"></hamburger>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">
      <screenfull class="right-menu-item hover-effect"></screenfull>
      <!--头像 -->
      <el-dropdown class="right-menu-item hover-effect avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{ dropdown.dashboard }}
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display: block;" @click="fedLogOut">{{ dropdown.logout }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { AppModule } from '@/store/app/index.ts'
import { UserModule } from '@/store/user/index.ts'

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
  // data
  private dropdown: {} = {
    dashboard: '首页',
    logout: '退出登录'
  }

  // computed
  get isActive() {
    return !AppModule.sidebar.opened
  }
  get avatar() {
    return UserModule.avatar
  }
  // methods
  // 切换侧边栏显示/隐藏
  toggleClick(): void {
    AppModule.toggleSideBar()
  }
  fedLogOut() {
    UserModule.FedLogOut().then(() => {
      location.reload()
    })
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
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        box-sizing: border-box;
        height: 50px;
        padding-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          cursor: pointer;
          top: 28px;
          right: -20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
