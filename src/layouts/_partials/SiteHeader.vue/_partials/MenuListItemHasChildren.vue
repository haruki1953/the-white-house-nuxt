<script setup lang="ts">
import MenuItemSubmenuIndicatorIcon from './MenuItemSubmenuIndicatorIcon.vue'

defineProps<{
  content: string
  href: string
}>()

const linkRef = ref<ComponentPublicInstance | null>(null)
const { isOutside: linkIsOutside } = useMouseInElement(linkRef)

const ulRef = ref<HTMLElement | null>(null)
const { isOutside: ulIsOutside } = useMouseInElement(ulRef)

const { width } = useWindowSize()
// 是否小屏状态 宽度小于782
const isWidthLt782 = computed(() => {
  if (width.value < 782) {
    return true
  }
  return false
})
// TODO

const isActive = computed(() => {
  if (!linkIsOutside.value || !ulIsOutside.value) {
    return true
  }
  return false
})
const hasActive = computed(() => {
  if (!ulIsOutside.value) {
    return true
  }
  return false
})
</script>

<template>
  <li
    :class="{
      'is-active': isActive
    }"
  >
    <NuxtLink ref="linkRef" :to="href">
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
        <a href="#">
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
