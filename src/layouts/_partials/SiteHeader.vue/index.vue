<script setup lang="ts">
import HeaderP1 from './_partials/HeaderP1.vue'
import HeaderWordmark from './_partials/HeaderWordmark.vue'
import HeaderP2 from './_partials/HeaderP2.vue'
import { useBodyPopover, useHeaderSticky } from './_composables'

// 控制body.has-popover-open
useBodyPopover()
// 控制body.has-sticky-header
useHeaderSticky()

// 控制header__popover.is-open
const popoverStore = usePopoverStore()
const isOpen = computed(() => {
  if (popoverStore.popoverState !== 'close') {
    return true
  }
  return false
})
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
      <div
        class="wp-block-whitehouse-header__popover"
        :class="{
          'is-open': isOpen
        }"
      >
        <div class="wp-block-whitehouse-header__popover--inner"></div>
      </div>
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

    .wp-block-whitehouse-header__popover {
      --wh-header--icon-size: 64px;
      --wh-header--popover--content-width: 100%;
      --wh-header--popover--columns: 1;
      --wh-header--popover--column-gap: 0%;
      --wh-header--popover--column-size: var(
        --wh-header--popover--content-width
      );
      background-color: var(--wh-header--popover--background-color);
      color: var(--wh-header--popover--color);
      inset: 0;
      padding-bottom: var(--wp--preset--spacing--20);
      padding-top: calc(
        var(--wh-header--calculated-height) + var(--wp--preset--spacing--40)
      );
      place-items: start;
      pointer-events: none;
      position: fixed;
      transform: translateX(-100%);
      transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      visibility: hidden;
      z-index: 10000;
      @media screen and (min-width: 782px) {
        --wh-header--popover--content-width: 100%;
        --wh-header--popover--columns: 3;
        --wh-header--popover--column-gap: var(--wp--preset--spacing--12);
        --wh-header--popover--column-size: calc(
          (
              var(--wh-header--popover--content-width) -
                (var(--wh-header--popover--columns) - 1) *
                var(--wh-header--popover--column-gap)
            ) /
            var(--wh-header--popover--columns)
        );
        place-items: center;
      }
      @media screen and (min-width: 960px) {
        --wh-header--popover--column-gap: var(--wp--preset--spacing--40);
      }
      @media screen and (min-width: 1080px) {
        --wh-header--popover--content-width: var(
          --wp--style--global--xlarge-size
        );
        --wh-header--popover--columns: 3;
      }
      &.is-open {
        display: flex;
        pointer-events: all;
        transform: translateX(0);
        visibility: visible;
      }

      .wp-block-whitehouse-header__popover--inner {
        height: 100%;
        margin-inline: auto;
        max-width: var(--wh-header--popover--content-width);
        opacity: 0;
        transition:
          opacity 0.25s ease-in-out,
          visibility 0.25s ease-in-out;
        transition-delay: 0.25s;
        visibility: hidden;
        width: 100%;
        @media screen and (min-width: 782px) {
          .wp-block-whitehouse-header__popover--inner {
            height: auto;
            min-height: 435px;
          }
        }
        @media screen and (min-width: 782px) and (orientation: landscape) and (max-height: 599px) {
          .wp-block-whitehouse-header__popover--inner {
            height: 100%;
            min-height: 0;
          }
        }
      }
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
