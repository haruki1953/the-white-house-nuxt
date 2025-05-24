<script setup lang="ts"></script>

<template>
  <div class="wp-block-whitehouse-footer__menu">
    <nav class="wp-block-whitehouse-footer__menu--footer">
      <ul class="menu">
        <li>
          <a href="https://www.whitehouse.gov/visit/">Visit</a>
        </li>
        <li>
          <a href="https://www.whitehouse.gov/gallery/">Gallery</a>
        </li>
        <li>
          <a href="https://www.whitehouse.gov/videos/">Video Library</a>
        </li>
        <li>
          <a href="https://www.whitehouse.gov/america250/">America 250</a>
        </li>
        <li>
          <a href="https://www.whitehouse.gov/founding-fathers/">
            Founding Fathers
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.wp-block-whitehouse-footer__menu {
  @media screen and (min-width: 440px) {
    --wp-footer--menu--font-size: 0.75rem;
  }
  @media screen and (max-width: 439px) {
    --wp-footer--menu--font-size: clamp(0.5455rem, 2.73vw + 0rem, 0.75rem);
  }
  @media screen and (max-width: 781px) {
    order: 0;
  }

  ul.menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0;
    justify-items: center;
    @media screen and (min-width: 782px) {
      justify-items: start;
    }

    li {
      list-style: none;

      a {
        display: inline-block;
        font-size: var(--wp-footer--menu--font-size);
        letter-spacing: 2.5px;
        padding: 6px 0;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        @media screen and (min-width: 782px) {
          text-align: left;
        }
      }
    }
  }
}
</style>

<style lang="scss">
:root:root:root {
  .wp-block-whitehouse-footer__menu:has(a:hover) a:not(:hover) {
    opacity: 0.5;
  }
}
</style>
