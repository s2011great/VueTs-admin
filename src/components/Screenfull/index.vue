<template>
  <div @click="fullscreenClick">
    <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'"></svg-icon>
  </div>
</template>
<script lang="ts">
import screenfull, { Screenfull as Sf } from 'screenfull'
import { Vue, Component } from 'vue-property-decorator'
import { mount } from '@vue/test-utils';
@Component({
  name: 'Screenfull'
})
export default class Screenfull extends Vue {
  // data
  private isFullscreen: boolean = false

  // 生命周期函数
  mounted() {
    this.init()
  }

  // methods
  // 点击切换全屏/退出全屏
  fullscreenClick() {
    if (!(screenfull as Sf).enabled) {
      this.$message({
        message: 'you browser can not work',
        type: 'warning'
      })
      return false
    }
    (screenfull as Sf).toggle()
  }
  // 初始化
  init() {
    if ((screenfull as Sf).enabled) {
      (screenfull as Sf).on('change', (): void => {
        this.isFullscreen = (screenfull as Sf).isFullscreen
      })
    }
  }
}
</script>
