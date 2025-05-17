<script setup lang="ts"></script>

<template>
  <div class="wp-block-whitehouse-header__wordmark">
    <a href="/" rel="home" title="The White House">
      <span>The</span>
      White House
    </a>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
