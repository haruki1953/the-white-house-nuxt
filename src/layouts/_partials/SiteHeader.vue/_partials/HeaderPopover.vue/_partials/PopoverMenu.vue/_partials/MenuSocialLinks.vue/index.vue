<script setup lang="ts">
import SocialLink from './_partials/SocialLink.vue'
</script>

<template>
  <div class="wp-block-whitehouse-header__popover--social-links">
    <ul class="wp-block-social-links">
      <SocialLink href="https://x.com/whitehouse" lable="X">
        <!-- https://fontawesome.com/search -->
        <i class="fa-brands fa-x-twitter"></i>
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/whitehouse/"
        lable="Instagram"
      >
        <i class="fa-brands fa-instagram"></i>
      </SocialLink>
      <SocialLink href="https://www.facebook.com/WhiteHouse/" lable="Facebook">
        <i class="fa-brands fa-facebook"></i>
      </SocialLink>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.wp-block-whitehouse-header__popover--social-links {
  display: block;
  padding-left: var(--wp--style--root--padding-left);
  padding-right: var(--wp--style--root--padding-right);
  @media screen and (min-width: 782px) {
    display: none;
  }

  .wp-block-social-links {
    background: none;
    box-sizing: border-box;
    margin-left: 0;
    padding-left: 0;
    padding-right: 0;
    text-indent: 0;
    font-size: 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: var(--wp--preset--spacing--32);
    justify-content: center;
    row-gap: var(--wp--preset--spacing--12);
    margin-block: var(--wp--preset--spacing--48);
  }
}
</style>
