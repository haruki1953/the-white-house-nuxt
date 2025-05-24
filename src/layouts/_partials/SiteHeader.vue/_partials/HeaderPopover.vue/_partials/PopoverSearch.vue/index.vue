<script setup lang="ts">
const popoverStore = usePopoverStore()

// 控制header__popover--menu.is-visible
const isVisible = computed(() => {
  if (popoverStore.popoverState === 'search') {
    return true
  }
  return false
})
</script>

<template>
  <div
    class="wp-block-whitehouse-header__popover--search popover-context"
    :class="{
      'is-visible': isVisible
    }"
  >
    <div class="form">
      <label
        class="screen-reader-text"
        for="wp-block-whitehouse-header-4__popover--search-input"
      >
        Search for:
      </label>
      <input
        id="wp-block-whitehouse-header-4__popover--search-input"
        type="search"
        class="wp-block-whitehouse-header__popover--search--input"
        placeholder="Type Your Search…"
        value=""
        name="s"
        title="Search for:"
      />
      <button
        type="submit"
        class="wp-block-whitehouse-header__popover--search--submit"
        title="Search"
      >
        Press Enter to Search
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wp-block-whitehouse-header__popover--search {
  align-items: center;
  flex-direction: column;
  padding-left: var(--wp--style--root--padding-left);
  padding-right: var(--wp--style--root--padding-right);
  &.popover-context {
    display: none;
  }
  &.is-visible {
    display: flex;
  }

  .form {
    display: contents;

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

    input[type='search'] {
      // -webkit-appearance: textfield;
      // -moz-appearance: textfield;
      // appearance: textfield;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: 0 0;
      border-color: var(--wp--preset--color--pale-gray);
      border-radius: 0;
      border-style: solid;
      border-width: 0 0 1px !important;
      color: var(--wh-header--color);
      display: block;
      font-family: var(--wp--custom--typography--heading-4--font-family);
      font-size: var(--wp--custom--typography--heading-4--font-size);
      font-weight: var(--wp--custom--typography--heading-4--font-weight);
      height: auto;
      letter-spacing: -0.14px;
      letter-spacing: var(--wp--custom--typography--heading-4--letter-spacing);
      line-height: 1;
      line-height: var(--wp--custom--typography--heading-4--line-height);
      margin-bottom: 0.5em;
      padding: 10px;
      text-align: center;
      text-transform: var(--wp--custom--typography--heading-4--text-transform);
      text-transform: none;
      width: 100%;
      @media screen and (min-width: 782px) {
        font-family: var(--wp--custom--typography--heading-2--font-family);
        font-size: var(--wp--custom--typography--heading-2--font-size);
        font-weight: var(--wp--custom--typography--heading-2--font-weight);
        letter-spacing: var(
          --wp--custom--typography--heading-2--letter-spacing
        );
        line-height: var(--wp--custom--typography--heading-2--line-height);
        padding: 20px 10px;
        text-transform: var(
          --wp--custom--typography--heading-2--text-transform
        );
        text-transform: none;
      }
      &:focus {
        outline: none;
      }
      &::-moz-placeholder {
        color: hwb(from var(--wp--preset--color--white) h w b/.3);
      }
      &::placeholder {
        color: hwb(from var(--wp--preset--color--white) h w b/.3);
      }
    }

    .wp-block-whitehouse-header__popover--search--submit {
      background: none;
      border: 0;
      box-shadow: none;
      color: inherit;
      cursor: pointer;
      font-family: var(--wp--custom--typography--heading-6--font-family);
      font-size: var(--wp--custom--typography--heading-6--font-size);
      font-weight: var(--wp--custom--typography--heading-6--font-weight);
      letter-spacing: var(--wp--custom--typography--heading-6--letter-spacing);
      line-height: var(--wp--custom--typography--heading-6--line-height);
      padding: 0;
      text-transform: var(--wp--custom--typography--heading-6--text-transform);
    }
  }
}
</style>
