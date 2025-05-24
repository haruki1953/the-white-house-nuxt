<script setup lang="ts">
import FooterCenter from './_partials/FooterCenter.vue'
import FooterInfo from './_partials/FooterInfo.vue'
import FooterMenu from './_partials/FooterMenu.vue'
import FooterMenu1 from './_partials/FooterMenu1.vue'
</script>

<template>
  <div class="wp-block-whitehouse-footer__navigation">
    <div
      class="wp-block-whitehouse-footer__navigation--inner-container has-secondary-footer-nav"
    >
      <FooterMenu></FooterMenu>
      <FooterMenu1></FooterMenu1>
      <FooterCenter></FooterCenter>
      <FooterInfo></FooterInfo>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wp-block-whitehouse-footer__navigation {
  --wh-footer-navigation-padding-top: 80px;
  --wh-footer-navigation-column-gap: var(--wp--preset--spacing--32);
  --wh-footer-navigation-row-gap: var(--wp--preset--spacing--48);
  padding-block-end: var(--wp--preset--spacing--64);
  padding-block-start: var(--wh-footer-navigation-padding-top);
  padding-left: var(--wp--style--root--padding-left);
  padding-right: var(--wp--style--root--padding-right);
  @media screen and (min-width: 960px) {
    --wh-footer-navigation-column-gap: var(--wp--preset--spacing--48);
  }

  .wp-block-whitehouse-footer__navigation--inner-container {
    display: grid;
    gap: var(--wh-footer-navigation-row-gap)
      var(--wh-footer-navigation-column-gap);
    grid-template-columns: 1fr;
    max-width: var(--wp--style--global--wide-size);
    @media screen and (min-width: 782px) {
      grid-template-columns: repeat(3, 1fr);
    }
    margin-inline: auto;
    width: 100%;
    &.has-secondary-footer-nav {
      @media screen and (min-width: 440px) {
        grid-template-columns: 1fr 1fr;
      }
      @media screen and (min-width: 782px) {
        grid-template-columns: 1fr 1fr 1.5fr minmax(200px, 1fr);
      }
      @media screen and (min-width: 1080px) {
        grid-template-columns: 2fr 2fr 4fr 4fr;
      }
    }
  }
}
</style>
