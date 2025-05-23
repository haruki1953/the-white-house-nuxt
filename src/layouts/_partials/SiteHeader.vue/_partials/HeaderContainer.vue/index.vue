<script setup lang="ts">
import HeaderP1 from './_partials/HeaderP1.vue'
import HeaderWordmark from './_partials/HeaderWordmark.vue'
import HeaderP2 from './_partials/HeaderP2.vue'
</script>

<template>
  <div class="wp-block-whitehouse-header__inner-container">
    <div class="wp-block-whitehouse-header__content">
      <HeaderP1></HeaderP1>
      <HeaderWordmark></HeaderWordmark>
      <HeaderP2></HeaderP2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wp-block-whitehouse-header__inner-container {
  margin-inline: auto;
  max-width: var(--wp--style--global--full-size);
  width: 100%;

  .wp-block-whitehouse-header__content {
    -moz-column-gap: var(--wp--preset--spacing--32);
    column-gap: var(--wp--preset--spacing--32);
    display: grid;
    grid-template-columns: [p1-start] 1fr [p1-end logo-start] auto [logo-end p2-start] 1fr [p2-end];
    grid-template-rows: [p1-start logo-start p2-start] auto [p1-end logo-end p2-end];
    height: var(--wh-header--height);
  }
}
</style>
