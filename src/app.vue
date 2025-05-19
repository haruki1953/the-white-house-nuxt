<template>
  <div class="app-body">
    <div class="wp-site-blocks">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wp-site-blocks {
  overflow-x: clip;
  padding-top: var(--wp--style--root--padding-top);
  padding-bottom: var(--wp--style--root--padding-bottom);
}
</style>
