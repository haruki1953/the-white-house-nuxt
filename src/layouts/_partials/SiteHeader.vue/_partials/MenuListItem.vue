<script setup lang="ts">
defineProps<{
  content: string
  href: string
}>()

const linkRef = ref<ComponentPublicInstance | null>(null)
const { isOutside: linkIsOutside } = useMouseInElement(linkRef)
</script>

<template>
  <li
    :class="{
      'is-active': !linkIsOutside
    }"
  >
    <NuxtLink ref="linkRef" :to="href">{{ content }}</NuxtLink>
  </li>
</template>

<style lang="scss" scoped></style>
