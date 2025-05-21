<script setup lang="ts">
import HeaderP1 from './_partials/HeaderP1.vue'
import HeaderWordmark from './_partials/HeaderWordmark.vue'
import HeaderP2 from './_partials/HeaderP2.vue'
import { useBodyPopover, useHeaderSticky } from './_composables'
import MenuItemSubmenuIndicatorIcon from './_partials/MenuItemSubmenuIndicatorIcon.vue'
import MenuListItemHasChildren from './_partials/MenuListItemHasChildren.vue'
import MenuListItem from './_partials/MenuListItem.vue'

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

// 控制header__popover--menu.is-visible
const isVisible = computed(() => {
  if (popoverStore.popoverState === 'menu') {
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
        <div class="wp-block-whitehouse-header__popover--inner">
          <nav
            class="wp-block-whitehouse-header__popover--menu popover-context"
            :class="{
              'is-visible': isVisible
            }"
            data-submenu-level="1"
          >
            <div class="wp-block-whitehouse-header__popover--navigation">
              <ul class="wp-block-whitehouse-header__popover--menu--list menu">
                <MenuListItem href="/" content="Home"></MenuListItem>
                <MenuListItemHasChildren href="/news" content="News">
                  <MenuListItem
                    href="/articles"
                    content="Articles"
                  ></MenuListItem>
                  <MenuListItem
                    href="/presidential-actions"
                    content="Presidential Actions"
                  ></MenuListItem>
                </MenuListItemHasChildren>
                <!-- <li class="is-active">
                  <NuxtLink to="/news">
                    News
                    <span class="menu-item-submenu-indicator">
                      <MenuItemSubmenuIndicatorIcon></MenuItemSubmenuIndicatorIcon>
                    </span>
                  </NuxtLink>
                  <ul class="has-active">
                    <li class="menu-item-back">
                      <a href="#">
                        Back
                        <span class="menu-item-submenu-indicator">
                          <MenuItemSubmenuIndicatorIcon></MenuItemSubmenuIndicatorIcon>
                        </span>
                      </a>
                    </li>
                    <li>
                      <NuxtLink href="/articles"> Articles </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink href="/presidential-actions">
                        Presidential Actions
                      </NuxtLink>
                    </li>
                  </ul>
                </li> -->
              </ul>
            </div>
          </nav>
        </div>
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
          height: auto;
          min-height: 435px;
        }
        @media screen and (min-width: 782px) and (orientation: landscape) and (max-height: 599px) {
          height: 100%;
          min-height: 0;
        }

        .wp-block-whitehouse-header__popover--menu {
          flex-direction: column;
          height: 100%;
          position: relative;
          @media screen and (min-width: 782px) {
            height: auto;
            max-height: 80vh;
            padding-left: var(--wp--style--root--padding-left);
            padding-right: var(--wp--style--root--padding-right);
          }
          &.popover-context {
            display: none;
          }
          &.is-visible {
            display: flex;
          }

          .wp-block-whitehouse-header__popover--navigation {
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;

            .wp-block-whitehouse-header__popover--menu--list {
              flex: 1;
              position: relative;
              transition: allow-discrete 0.125s ease-in-out 0s;
              transition-property: transform;
              width: 100%;
              &.menu {
                list-style: none;
                margin: 0;
                padding: 0;
              }
              :deep() {
                li {
                  display: contents;
                  list-style: none;
                  a {
                    align-items: center;
                    box-sizing: border-box;
                    display: flex;
                    font-family: var(
                      --wp--custom--typography--font-family--sans-serif
                    );
                    font-size: var(--wh-header--popover--menu--font-size);
                    font-weight: 400;
                    gap: var(--wp--preset--spacing--12);
                    justify-content: flex-start;
                    letter-spacing: 0.010625em;
                    line-height: 1.2;
                    outline: none;
                    padding: 1.15em 2.66em;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    user-select: none;
                    width: var(--wh-header--popover--column-size);
                    text-decoration: none;
                    @media screen and (min-width: 440px) {
                      --wh-header--popover--menu--font-size: clamp(
                        1rem,
                        0.1vw + 0.9725rem,
                        1.0625rem
                      );
                    }
                    @media screen and (min-width: 782px) {
                      justify-content: flex-start;
                    }
                    @media screen and (max-width: 439px) {
                      --wh-header--popover--menu--font-size: clamp(
                        0.7273rem,
                        3.64vw + 0rem,
                        1rem
                      );
                    }

                    .menu-item-submenu-indicator {
                      line-height: 7px;
                      pointer-events: none;
                    }
                  }
                  ul {
                    display: flex;
                    flex-direction: column;
                    left: var(--wh-header--popover--column-size);
                    opacity: 0;
                    padding: 0;
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    transition: allow-discrete 0.125s ease-in-out 0s;
                    transition-property: opacity, visibility;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    user-select: none;
                    visibility: hidden;
                    width: var(--wh-header--popover--column-size);
                    @media screen and (min-width: 782px) {
                      border-left: 1px solid var(--wp--preset--color--white);
                      display: flex;
                      min-height: 100%;
                      padding-left: var(--wh-header--popover--column-gap);
                    }

                    a {
                      width: auto;
                    }
                    .menu-item-back {
                      @media screen and (min-width: 782px) {
                        display: none !important;
                      }
                      > a {
                        border-bottom: 1px solid hsla(0, 0%, 100%, 0.125);
                        font-weight: 600;
                        margin-bottom: 20px;

                        .menu-item-submenu-indicator {
                          order: -1;
                          transform: rotate(180deg);
                        }
                      }
                    }

                    ul {
                      @media screen and (min-width: 782px) {
                        left: 100%;
                        width: calc(
                          100% - var(--wh-header--popover--column-gap)
                        );
                      }
                    }
                  }
                }
                > li > a {
                  font-weight: 600;
                  grid-column: primary / primary;
                  letter-spacing: 1.02px;
                  text-transform: uppercase;
                }
                > li.is-active > a {
                  @media screen and (min-width: 782px) {
                    background-color: var(--wp--preset--color--pale-gray);
                    color: var(--wp--preset--color--charcoal);
                  }
                }
                .is-active > ul {
                  opacity: 1;
                  pointer-events: all;
                  -webkit-user-select: all;
                  -moz-user-select: all;
                  user-select: all;
                  visibility: visible;
                }
                ul.has-active > li:not(.is-active) a {
                  opacity: 0.333;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
:root:root:root {
  @media screen and (max-width: 781px) {
    [data-submenu-level='1'] .wp-block-whitehouse-header__popover--menu--list {
      transform: translateX(-100%);
    }
  }
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
