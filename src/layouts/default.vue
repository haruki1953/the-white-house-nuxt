<script setup lang="ts">
import SiteFooter from './_partials/SiteFooter.vue'
import SiteHeader from './_partials/SiteHeader.vue'
</script>

<template>
  <div>
    <SiteHeader></SiteHeader>
    <slot />
    <SiteFooter></SiteFooter>
  </div>
</template>
<style lang="scss" scoped></style>
