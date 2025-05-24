<script setup lang="ts">
import FooterCopyright from './_partials/FooterCopyright.vue'
import FooterNavigation from './_partials/FooterNavigation.vue'
</script>

<template>
  <footer class="alignfull site-footer wp-block-template-part">
    <div class="wp-block-whitehouse-footer">
      <div class="wp-block-whitehouse-footer__inner-container">
        <div class="wp-block-whitehouse-footer__content">
          <FooterNavigation></FooterNavigation>
          <FooterCopyright></FooterCopyright>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  margin-block: var(--wp--preset--spacing--72) 0;

  .wp-block-whitehouse-footer {
    background-color: var(--wp--preset--color--deep-navy-blue);
    // 疑似白宫网站的错误，--wp--preset--color--light-gold 未定义
    // border-top: 8px solid var(--wp--preset--color--light-gold);
    color: var(--wp--preset--color--white);
  }
}
</style>

<style lang="scss">
:root:root:root {
  .remove-content-margins .site-footer {
    margin-block: 0;
  }
}
</style>
