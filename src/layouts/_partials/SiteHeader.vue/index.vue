<script setup lang="ts">
import HeaderP1 from './_partials/HeaderP1.vue'
import HeaderWordmark from './_partials/HeaderWordmark.vue'
import HeaderP2 from './_partials/HeaderP2.vue'
</script>

<template>
  <header class="site-header">
    <div class="wp-block-whitehouse-header">
      <div class="wp-block-whitehouse-header__inner-container">
        <div class="wp-block-whitehouse-header__content">
          <HeaderP1></HeaderP1>
          <HeaderWordmark></HeaderWordmark>
          <HeaderP2></HeaderP2>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.site-header {
  .wp-block-whitehouse-header {
    background-color: var(--wh-header--background-color);
    box-shadow: inset 0 -1px 0 var(--wh-header--border-color);
    color: var(--wh-header--color);
    position: relative;
    z-index: 5;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding-left: var(--wp--style--root--padding-left);
    padding-right: var(--wp--style--root--padding-right);
    @media screen and (min-width: 1080px) {
      --wh-header--height: 90px;
    }

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
  }
}
</style>
