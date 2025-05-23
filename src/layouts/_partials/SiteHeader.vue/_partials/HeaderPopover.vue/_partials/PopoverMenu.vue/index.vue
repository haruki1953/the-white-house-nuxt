<script setup lang="ts">
import MenuListItemHasChildren from './_partials/MenuListItemHasChildren.vue'
import MenuListItem from './_partials/MenuListItem.vue'
import MenuListItemSkeleton from './_partials/MenuListItemSkeleton.vue'

const popoverStore = usePopoverStore()

// 控制header__popover--menu.is-visible
const isVisible = computed(() => {
  if (popoverStore.popoverState === 'menu') {
    return true
  }
  return false
})
</script>

<template>
  <nav
    class="wp-block-whitehouse-header__popover--menu popover-context"
    :class="{
      'is-visible': isVisible
    }"
    :data-submenu-level="popoverStore.menuSubLevel"
  >
    <div class="wp-block-whitehouse-header__popover--navigation">
      <ul class="wp-block-whitehouse-header__popover--menu--list menu">
        <MenuListItem :level="1" href="/" content="Home"></MenuListItem>
        <MenuListItemHasChildren :level="1" href="/news" content="News">
          <MenuListItem
            :level="2"
            href="/articles"
            content="Articles"
          ></MenuListItem>
          <MenuListItem
            :level="2"
            href="/articles"
            content="Articles"
          ></MenuListItem>
          <MenuListItemHasChildren :level="2" href="/news" content="News">
            <MenuListItem
              :level="3"
              href="/articles"
              content="Articles"
            ></MenuListItem>
            <MenuListItem
              :level="3"
              href="/articles"
              content="Articles"
            ></MenuListItem>
          </MenuListItemHasChildren>
        </MenuListItemHasChildren>
        <MenuListItemHasChildren :level="1" href="/news" content="News">
          <MenuListItem
            :level="2"
            href="/articles"
            content="Articles"
          ></MenuListItem>
          <MenuListItem
            :level="2"
            href="/articles"
            content="Articles"
          ></MenuListItem>
          <MenuListItem
            :level="2"
            href="/articles"
            content="Articles"
          ></MenuListItem>
          <MenuListItem
            :level="2"
            href="/presidential-actions"
            content="Presidential Actions"
          ></MenuListItem>
        </MenuListItemHasChildren>
        <MenuListItemSkeleton></MenuListItemSkeleton>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
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
            font-family: var(--wp--custom--typography--font-family--sans-serif);
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
                width: calc(100% - var(--wh-header--popover--column-gap));
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
</style>

<style lang="scss">
:root:root:root {
  @media screen and (max-width: 781px) {
    [data-submenu-level='1'] .wp-block-whitehouse-header__popover--menu--list {
      transform: translateX(-100%);
    }
    [data-submenu-level='2'] .wp-block-whitehouse-header__popover--menu--list {
      transform: translateX(-200%);
    }
  }
}
</style>
