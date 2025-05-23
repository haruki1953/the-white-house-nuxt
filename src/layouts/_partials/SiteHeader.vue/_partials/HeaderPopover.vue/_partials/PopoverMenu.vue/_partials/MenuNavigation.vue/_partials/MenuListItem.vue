<script setup lang="ts">
const props = defineProps<{
  content: string
  href: string
  level: 1 | 2 | 3
}>()

const popoverStore = usePopoverStore()

const item = generateRandomKey()
const setItemActive = () => {
  if (isWidthLt782.value) {
    return
  }
  popoverStore.setMenuItenActive(props.level, item)
}

const { width } = useWindowSize()
// 是否小屏状态 宽度小于782
const isWidthLt782 = computed(() => {
  if (width.value < 782) {
    return true
  }
  return false
})

const isActive = computed(() => {
  return popoverStore.isMenuItemActive(props.level, item)
})
</script>

<template>
  <li
    class="menu-item"
    :class="{
      'is-active': isActive
    }"
  >
    <NuxtLink :to="href" @mouseenter="setItemActive">{{ content }}</NuxtLink>
  </li>
</template>

<style lang="scss" scoped></style>
