<script setup lang="ts">
import { whitehouseLogo } from '~/config'
import IconMenuToggleClose from './IconMenuToggleClose.vue'
import IconSearchIcon from './IconSearchIcon.vue'

const popoverStore = usePopoverStore()
const toggleSearch = () => {
  if (popoverStore.popoverState === 'search') {
    popoverStore.setPopoverClose()
  } else if (popoverStore.popoverState === 'close') {
    popoverStore.setPopoverSearch()
  } else if (popoverStore.popoverState === 'menu') {
    popoverStore.setPopoverSearch()
  }
}

const buttonLable = computed(() => {
  if (popoverStore.popoverState === 'search') {
    return 'Close'
  }
  return 'Search'
})
</script>

<template>
  <div class="wp-block-whitehouse-header__p2">
    <div class="wp-block-whitehouse-header__search">
      <button
        class="button-icon wp-block-whitehouse-header__search--button"
        @click="toggleSearch"
      >
        <span>{{ buttonLable }}</span>
        <IconSearchIcon
          class="wp-block-whitehouse-header__search-icon--open"
        ></IconSearchIcon>
        <IconMenuToggleClose
          class="wp-block-whitehouse-header__search-icon--close"
        ></IconMenuToggleClose>
      </button>
    </div>
    <div class="wp-block-whitehouse-header__logo">
      <a href="/" rel="home" title="The White House">
        <picture>
          <img
            class="wp-block-whitehouse-header__logo--asset"
            :src="whitehouseLogo"
            alt=""
            width="868"
            height="404"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wp-block-whitehouse-header__p2 {
  --wh-header--p2--gap: var(--wp--preset--spacing--20);
  display: flex;
  grid-area: p2;
  justify-content: flex-end;
  margin-inline-end: calc(var(--wh-header--p2--gap) * -1);
  min-width: 0;

  .wp-block-whitehouse-header__search {
    display: grid;
    grid-area: search;
    place-items: center;
    @media screen and (min-width: 782px) {
      box-shadow: inset 1px 0 0 var(--wh-header--border-color);
    }

    .wp-block-whitehouse-header__search--button {
      color: currentcolor;
      height: 100%;
      outline: none;
      padding-inline: var(--wh-header--p2--gap) !important;
      position: relative;
      transition: allow-discrete 0.125s ease-in-out 0s;
      z-index: 10001;

      span {
        display: none;
        font-family: var(--wp--custom--typography--heading-6--font-family);
        font-size: var(--wp--custom--typography--heading-6--font-size);
        font-weight: var(--wp--custom--typography--heading-6--font-weight);
        letter-spacing: var(
          --wp--custom--typography--heading-6--letter-spacing
        );
        line-height: var(--wp--custom--typography--heading-6--line-height);
        position: absolute;
        right: calc(50% + 26px);
        text-transform: var(
          --wp--custom--typography--heading-6--text-transform
        );
        text-transform: none;
        top: 50%;
        transform: translateY(-50%);
        transition: opacity 0.25s ease-in-out;
      }

      .wp-block-whitehouse-header__search-icon--close {
        display: none;
      }
    }
  }

  .wp-block-whitehouse-header__logo {
    display: none;
    @media screen and (min-width: 782px) {
      box-shadow: inset 1px 0 0 var(--wh-header--border-color);
      display: grid;
      height: 100%;
      place-items: center;
    }

    a {
      padding-inline: var(--wh-header--p2--gap);
      display: inline-block;
      vertical-align: middle;

      img {
        max-height: calc(var(--wh-header--height) - 18px);
        display: block;
        height: var(--wh-header--logo--height);
        max-width: 100%;
        width: auto;
      }
    }
  }
}
</style>

<style lang="scss">
:root:root:root {
  .has-popover-open--search {
    .wp-block-whitehouse-header__search-icon--open {
      display: none;
    }
    .wp-block-whitehouse-header__search-icon--close {
      display: block;
    }
  }
  @media screen and (min-width: 782px) {
    .has-popover-open .wp-block-whitehouse-header__search span {
      animation: popover-action-label-animation 0.25s ease-in-out 0.25s forwards;
      animation-iteration-count: 1;
      display: block;
      opacity: 0;
    }
  }
}
</style>
