<script setup lang="ts">
import MenuItemSubmenuIndicatorIcon from './MenuItemSubmenuIndicatorIcon.vue'

const props = defineProps<{
  content: string
  href?: string
  level: 1 | 2
}>()

const popoverStore = usePopoverStore()

const item = generateRandomKey()
const setItemActive = () => {
  if (isWidthLt782.value) {
    return
  }
  popoverStore.setMenuItenActive(props.level, item, 'sub')
}

const { width } = useWindowSize()
// 是否小屏状态 宽度小于782
const isWidthLt782 = computed(() => {
  if (width.value < 782) {
    return true
  }
  return false
})

// 小屏状态下的isActive控制
// const xsIsActive = ref(false)
const xsClick = (event: Event) => {
  event.preventDefault() // 阻止默认行为
  event.stopPropagation() // 阻止事件继续传播
  if (!isWidthLt782.value) {
    return
  }
  popoverStore.setMenuItenActive(props.level, item, 'sub')
}
const xsBack = () => {
  if (!isWidthLt782.value) {
    return
  }
  popoverStore.setMenuItenActive(props.level, null)
}

const isActive = computed(() => {
  return popoverStore.isMenuItemActive(props.level, item)
})
const hasActive = computed(() => {
  return isActive.value && popoverStore.hasMenuItemActive(props.level + 1)
})
</script>

<template>
  <li
    class="menu-item menu-item-has-children"
    :class="{
      'is-active': isActive
    }"
  >
    <!-- 小屏时点击不跳转，因为要展开 -->
    <NuxtLink
      :to="isWidthLt782 ? undefined : href"
      @mouseenter="setItemActive"
      @click="xsClick"
    >
      {{ content }}
      <span class="menu-item-submenu-indicator">
        <MenuItemSubmenuIndicatorIcon></MenuItemSubmenuIndicatorIcon>
      </span>
    </NuxtLink>
    <ul
      ref="ulRef"
      :class="{
        'has-active': hasActive
      }"
    >
      <li class="menu-item-back">
        <a href="javascript:;" @click="xsBack">
          Back
          <span class="menu-item-submenu-indicator">
            <MenuItemSubmenuIndicatorIcon></MenuItemSubmenuIndicatorIcon>
          </span>
        </a>
      </li>
      <slot></slot>
    </ul>
  </li>
</template>

<style lang="scss" scoped></style>
