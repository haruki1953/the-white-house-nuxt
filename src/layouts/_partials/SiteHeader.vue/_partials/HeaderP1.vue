<script setup lang="ts">
import IconMenuToggleClose from './IconMenuToggleClose.vue'
import IconMenuToggleOpen from './IconMenuToggleOpen.vue'

const targetMenuToggleButtonRef = ref(null)
const { isOutside: targetMenuToggleButtonIsOutside } = useMouseInElement(
  targetMenuToggleButtonRef
)

const popoverStore = usePopoverStore()
const toggleMenu = () => {
  if (popoverStore.popoverState === 'menu') {
    popoverStore.setPopoverClose()
  } else if (popoverStore.popoverState === 'close') {
    popoverStore.setPopoverMenu()
  } else if (popoverStore.popoverState === 'search') {
    popoverStore.setPopoverMenu()
  }
}

const buttonLable = computed(() => {
  if (popoverStore.popoverState === 'menu') {
    return 'Close'
  }
  return 'Menu'
})
</script>

<template>
  <div class="wp-block-whitehouse-header__p1">
    <div class="wp-block-whitehouse-header__menu-toggle">
      <button
        ref="targetMenuToggleButtonRef"
        class="button-icon wp-block-whitehouse-header__menu-toggle--button"
        @click="toggleMenu"
      >
        <IconMenuToggleOpen
          class="wp-block-whitehouse-header__menu-toggle--open"
          :isHover="!targetMenuToggleButtonIsOutside"
        ></IconMenuToggleOpen>
        <IconMenuToggleClose
          class="wp-block-whitehouse-header__menu-toggle--close"
        ></IconMenuToggleClose>
        <span>{{ buttonLable }}</span>
      </button>
    </div>
    <div class="wp-block-whitehouse-header__administration">
      <span>President Donald J. Trump</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wp-block-whitehouse-header__p1 {
  --wh-header--p1--gap: var(--wp--preset--spacing--32);
  align-items: center;
  display: flex;
  grid-area: p1;
  margin-inline-start: calc(var(--wh-header--p1--gap) * -1);
  min-width: 0;

  .wp-block-whitehouse-header__menu-toggle {
    height: 100%;
    @media screen and (min-width: 782px) {
      box-shadow: inset -1px 0 0 var(--wh-header--border-color);
    }

    .wp-block-whitehouse-header__menu-toggle--button {
      color: var(--wh-header--color);
      display: flex;
      height: 100%;
      outline: none;
      padding-inline: var(--wh-header--p1--gap) !important;
      position: relative;
      text-transform: none;
      z-index: 10001;

      .wp-block-whitehouse-header__menu-toggle--close {
        display: none;
      }

      span {
        display: none;
        font-family: var(--wp--custom--typography--heading-6--font-family);
        font-size: var(--wp--custom--typography--heading-6--font-size);
        font-weight: var(--wp--custom--typography--heading-6--font-weight);
        left: calc(50% + 26px);
        letter-spacing: var(
          --wp--custom--typography--heading-6--letter-spacing
        );
        line-height: var(--wp--custom--typography--heading-6--line-height);
        position: absolute;
        text-transform: var(
          --wp--custom--typography--heading-6--text-transform
        );
        text-transform: none;
        top: 50%;
        transform: translateY(-50%);
        transition: opacity 0.25s ease-in-out;
      }
    }
  }

  .wp-block-whitehouse-header__administration {
    display: none;
    padding-inline-start: var(--wh-header--p1--gap);
    @media screen and (min-width: 1080px) {
      display: block;
    }
    @media screen and (min-width: 440px) {
      --wh-header--administration--font-size: 0.75rem;
    }
    @media screen and (max-width: 439px) {
      --wh-header--administration--font-size: clamp(
        0.5455rem,
        2.73vw + 0rem,
        0.75rem
      );
    }
    span {
      display: block;
      font-size: var(--wh-header--administration--font-size);
      font-weight: 600;
      letter-spacing: 0.1667em;
      line-height: normal;
      text-transform: uppercase;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      white-space: nowrap;
    }
  }
}
</style>

<style lang="scss">
// 提升权重
:root:root:root {
  .has-popover-open--menu {
    .wp-block-whitehouse-header__menu-toggle--open {
      display: none;
    }
    .wp-block-whitehouse-header__menu-toggle--close {
      display: block;
    }
  }

  @media screen and (min-width: 782px) {
    .has-popover-open .wp-block-whitehouse-header__menu-toggle span {
      animation: popover-action-label-animation 0.25s ease-in-out 0.25s forwards;
      animation-iteration-count: 1;
      display: block;
      opacity: 0;
    }
  }
}
</style>
