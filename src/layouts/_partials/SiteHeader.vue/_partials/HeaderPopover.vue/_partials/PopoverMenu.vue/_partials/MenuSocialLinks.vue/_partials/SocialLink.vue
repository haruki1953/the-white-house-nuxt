<script setup lang="ts">
defineProps<{
  href: string
  lable: string
}>()
</script>

<template>
  <li class="wp-block-social-link">
    <a
      rel="noopener nofollow"
      target="_blank"
      :href="href"
      class="wp-block-social-link-anchor"
    >
      <slot></slot>
      <!-- https://fontawesome.com/search -->
      <!-- <i class="fa-brands fa-x-twitter"></i> -->
      <!-- <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        ></path>
      </svg> -->
      <span class="wp-block-social-link-label screen-reader-text">
        {{ lable }}
      </span>
    </a>
  </li>
</template>

<style lang="scss" scoped>
.wp-block-social-link {
  background: none !important;
  color: inherit !important;
  border-radius: 9999px;
  height: auto;
  display: inline-block;
  margin: 0;
  padding: 0;
  @media not (prefers-reduced-motion) {
    transition: transform 0.1s ease;
  }

  .wp-block-social-link-anchor {
    padding: 0 !important;
    align-items: center;
    display: flex;
    line-height: 0;
    border-bottom: 0;
    box-shadow: none;
    text-decoration: none;
    color: currentColor;
    fill: currentColor;

    i {
      height: 1em;
      width: 1em;
      color: currentColor;
      fill: currentColor;
    }
    svg {
      height: 1em;
      width: 1em;
      color: currentColor;
      fill: currentColor;
    }

    .screen-reader-text {
      border: 0;
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      word-wrap: normal !important;
    }
  }
}
</style>
