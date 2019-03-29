<template>
  <div class="hamburger" @click="toggleClick">
    <svg-icon class="hamburger-icon" :class="{ 'is-active': isActive }" :iconClass="iconName"></svg-icon>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'Hamburger'
})
export default class Hamburger extends Vue {
  // props
  @Prop({ default: false }) isActive!: boolean
  @Prop({ default: null }) toggleClick!: any
  // data
  private iconName: string = 'hamburger'
}
</script>
<style lang="scss" scoped>
.hamburger {
  .hamburger-icon {
    display: inline-block;
  }
  .hamburger-icon.is-active {
    transform: rotate(90deg);
  }
}
</style>
