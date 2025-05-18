<script setup lang="ts">
const popoverStore = usePopoverStore()

const scrollbarWidthMax = ref(0)
const scrollbarWidth = computed(() => {
  if (popoverStore.popoverState === 'close') {
    return scrollbarWidthMax.value
  }
  return 0
})

onMounted(() => {
  scrollbarWidthMax.value = utilGetScrollbarWidth()
})

const hasPopoverOpen = computed(() => {
  if (popoverStore.popoverState !== 'close') {
    return true
  }
  return false
})
const hasPopoverOpenMenu = computed(() => {
  if (popoverStore.popoverState === 'menu') {
    return true
  }
  return false
})
const hasPopoverOpenSearch = computed(() => {
  if (popoverStore.popoverState === 'search') {
    return true
  }
  return false
})
</script>

<template>
  <div
    class="app-body"
    :class="{
      'has-popover-open': hasPopoverOpen,
      'has-popover-open--menu': hasPopoverOpenMenu,
      'has-popover-open--search': hasPopoverOpenSearch
    }"
    :style="{
      '--wh-scrollbar-width-max': `${scrollbarWidthMax}px`,
      '--wh-scrollbar-width': `${scrollbarWidth}px`
    }"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.has-popover-open {
  height: 100%;
  // height: 100vh;
  margin: 0;
  overflow: hidden;
  padding-right: var(--wh-scrollbar-width-max, 0);
}
</style>
