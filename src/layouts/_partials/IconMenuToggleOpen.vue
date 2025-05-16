<script setup lang="ts">
defineProps<{
  isHover?: boolean
}>()
</script>
<template>
  <svg
    class="IconMenuToggleOpen wp-block-whitehouse-header__menu-toggle--open"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="20"
    height="20"
    :class="{
      isHover
    }"
  >
    <rect
      y="5"
      width="20"
      height="3.1"
      rx="1.5"
      ry="1.5"
      fill="currentColor"
    ></rect>
    <rect
      y="12.4"
      width="20"
      height="3.1"
      rx="1.5"
      ry="1.5"
      fill="currentColor"
    ></rect>
  </svg>
</template>
<style lang="scss" scoped>
svg {
  overflow: visible;
}

// 悬停动画
rect {
  transition: allow-discrete 0.125s ease-in-out 0s;
}
// 让鼠标用户看到悬停动画，而触屏用户不会
@media (pointer: fine) {
  .isHover {
    rect:first-child {
      transform: translateX(2px);
    }
    rect:last-child {
      transform: translateX(-2px);
    }
  }
}
</style>
