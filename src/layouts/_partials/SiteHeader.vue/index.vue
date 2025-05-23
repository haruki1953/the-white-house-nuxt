<script setup lang="ts">
import { useBodyPopover, useHeaderSticky } from './_composables'
import HeaderContainer from './_partials/HeaderContainer.vue'
import HeaderPopover from './_partials/HeaderPopover.vue'

// 控制body.has-popover-open
useBodyPopover()
// 控制body.has-sticky-header
useHeaderSticky()
</script>

<template>
  <header class="site-header">
    <div class="wp-block-whitehouse-header">
      <HeaderContainer></HeaderContainer>
      <HeaderPopover></HeaderPopover>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.site-header {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  margin-block: 0;
  position: relative;
  top: var(--wh-header--sticky-start);
  z-index: 10000;

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
  }
}
</style>

<style lang="scss">
:root:root:root {
  .has-popover-open .wp-block-whitehouse-header__popover--inner {
    opacity: 1;
    transform: translateX(calc(var(--wh-scrollbar-width-max) / 2 * -1));
    visibility: visible;
  }
  .has-sticky-header {
    .site-header {
      @supports (position: sticky) {
        animation-name: slideDown;
        left: 0;
        position: var(--wh-header--sticky--position);
        right: 0;
      }
      .wp-block-whitehouse-header {
        --wh-header--height: 50px;
      }
    }
  }
}
</style>
