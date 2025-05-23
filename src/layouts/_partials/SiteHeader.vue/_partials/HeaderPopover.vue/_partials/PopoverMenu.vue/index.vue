<script setup lang="ts">
import MenuCover from './_partials/MenuCover.vue'
import MenuNavigation from './_partials/MenuNavigation.vue'
import MenuSocialLinks from './_partials/MenuSocialLinks.vue'
const popoverStore = usePopoverStore()

// 控制header__popover--menu.is-visible
const isVisible = computed(() => {
  if (popoverStore.popoverState === 'menu') {
    return true
  }
  return false
})
</script>

<template>
  <nav
    class="wp-block-whitehouse-header__popover--menu popover-context"
    :class="{
      'is-visible': isVisible
    }"
    :data-submenu-level="popoverStore.menuSubLevel"
  >
    <MenuNavigation></MenuNavigation>
    <MenuSocialLinks></MenuSocialLinks>
    <MenuCover></MenuCover>
  </nav>
</template>

<style lang="scss" scoped>
.wp-block-whitehouse-header__popover--menu {
  flex-direction: column;
  height: 100%;
  position: relative;
  @media screen and (min-width: 782px) {
    height: auto;
    max-height: 80vh;
    padding-left: var(--wp--style--root--padding-left);
    padding-right: var(--wp--style--root--padding-right);
  }
  &.popover-context {
    display: none;
  }
  &.is-visible {
    display: flex;
  }
}
</style>
