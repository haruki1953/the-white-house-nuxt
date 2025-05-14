<template>
  <div>
    <header class="site-header">
      <div class="wp-block-whitehouse-header">
        <div class="wp-block-whitehouse-header__inner-container">
          <!--  -->
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.site-header {
  @media screen and (min-width: 1080px) {
    .wp-block-whitehouse-header {
      --wh-header--height: 90px;
    }
  }
  .wp-block-whitehouse-header {
    background-color: var(--wh-header--background-color);
    box-shadow: inset 0 -1px 0 var(--wh-header--border-color);
    color: var(--wh-header--color);
    position: relative;
    z-index: 5;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding-left: var(--wp--style--root--padding-left);
    padding-right: var(--wp--style--root--padding-right);
    .wp-block-whitehouse-header__inner-container {
      margin-inline: auto;
      max-width: var(--wp--style--global--full-size);
      width: 100%;
    }
  }
}
</style>
