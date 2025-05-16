<script setup lang="ts">
import { whitehouseLogo } from '~/config'
import IconMenuToggleClose from './_partials/IconMenuToggleClose.vue'
import IconMenuToggleOpen from './_partials/IconMenuToggleOpen.vue'
import IconSearchIcon from './_partials/IconSearchIcon.vue'

const targetMenuToggleButtonRef = ref(null)
const { isOutside: targetMenuToggleButtonIsOutside } = useMouseInElement(
  targetMenuToggleButtonRef
)
</script>

<template>
  <div>
    <header class="site-header">
      <div class="wp-block-whitehouse-header">
        <div class="wp-block-whitehouse-header__inner-container">
          <div class="wp-block-whitehouse-header__content">
            <div class="wp-block-whitehouse-header__p1">
              <div class="wp-block-whitehouse-header__menu-toggle">
                <button
                  ref="targetMenuToggleButtonRef"
                  class="button-icon wp-block-whitehouse-header__menu-toggle--button"
                >
                  <IconMenuToggleOpen
                    v-show="true"
                    :isHover="!targetMenuToggleButtonIsOutside"
                  ></IconMenuToggleOpen>
                  <IconMenuToggleClose v-show="false"></IconMenuToggleClose>
                  <span>Menu</span>
                </button>
              </div>
              <div class="wp-block-whitehouse-header__administration">
                <span>President Donald J. Trump</span>
              </div>
            </div>
            <div class="wp-block-whitehouse-header__wordmark">
              <a href="/" rel="home" title="The White House">
                <span>The</span>
                White House
              </a>
            </div>
            <div class="wp-block-whitehouse-header__p2">
              <div class="wp-block-whitehouse-header__search">
                <div
                  class="button-icon wp-block-whitehouse-header__search--button"
                >
                  <span>Search</span>
                  <IconSearchIcon v-show="true"></IconSearchIcon>
                  <IconMenuToggleClose v-show="false"></IconMenuToggleClose>
                </div>
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
          </div>
        </div>
      </div>
    </header>
    <slot />
  </div>
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

            span {
              display: none;
              font-family: var(
                --wp--custom--typography--heading-6--font-family
              );
              font-size: var(--wp--custom--typography--heading-6--font-size);
              font-weight: var(
                --wp--custom--typography--heading-6--font-weight
              );
              left: calc(50% + 26px);
              letter-spacing: var(
                --wp--custom--typography--heading-6--letter-spacing
              );
              line-height: var(
                --wp--custom--typography--heading-6--line-height
              );
              position: absolute;
              text-transform: var(
                --wp--custom--typography--heading-6--text-transform
              );
              text-transform: none;
              top: 50%;
              transform: translateY(-50%);
              transition: opacity 0.25s ease-in-out;
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

        .wp-block-whitehouse-header__wordmark {
          align-self: center;
          color: var(--wh-header--color);
          font-family: var(--wp--custom--typography--font-family--serif);
          font-size: var(--wh-header--wordmark--font-size);
          grid-area: logo;
          text-align: center;
          text-transform: uppercase;
          a {
            align-items: center;
            display: flex;
            gap: 8px;
            justify-items: center;
            line-height: 1;
            text-decoration: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            vertical-align: middle;
            white-space: nowrap;
            word-break: keep-all;
          }
          span {
            font-size: var(--wh-header--wordmark--prefix--font-size);
            font-style: italic;
            text-transform: none;
          }
        }

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
                font-family: var(
                  --wp--custom--typography--heading-6--font-family
                );
                font-size: var(--wp--custom--typography--heading-6--font-size);
                font-weight: var(
                  --wp--custom--typography--heading-6--font-weight
                );
                letter-spacing: var(
                  --wp--custom--typography--heading-6--letter-spacing
                );
                line-height: var(
                  --wp--custom--typography--heading-6--line-height
                );
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
      }
    }
  }
}
</style>
