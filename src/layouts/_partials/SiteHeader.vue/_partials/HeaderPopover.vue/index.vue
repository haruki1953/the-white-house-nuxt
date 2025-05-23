<script setup lang="ts">
import PopoverMenu from './_partials/PopoverMenu.vue'
import PopoverSearch from './_partials/PopoverSearch.vue'

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
  <div
    class="wp-block-whitehouse-header__popover"
    :class="{
      'is-open': isOpen
    }"
  >
    <div class="wp-block-whitehouse-header__popover--inner">
      <PopoverMenu></PopoverMenu>
      <PopoverSearch></PopoverSearch>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wp-block-whitehouse-header__popover {
  --wh-header--icon-size: 64px;
  --wh-header--popover--content-width: 100%;
  --wh-header--popover--columns: 1;
  --wh-header--popover--column-gap: 0%;
  --wh-header--popover--column-size: var(--wh-header--popover--content-width);
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
    --wh-header--popover--content-width: var(--wp--style--global--xlarge-size);
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
      height: auto;
      min-height: 435px;
    }
    @media screen and (min-width: 782px) and (orientation: landscape) and (max-height: 599px) {
      height: 100%;
      min-height: 0;
    }
  }
}
</style>
