<script setup lang="ts">
import { whitehouseLogo } from '~/config'
</script>

<template>
  <div class="wp-block-whitehouse-footer__center">
    <a
      href="/"
      class="wp-block-whitehouse-footer__center--figure-link"
      rel="home"
      title="The White House"
    >
      <figure class="wp-block-whitehouse-footer__center--figure">
        <picture>
          <img
            class="wp-block-whitehouse-footer__center--figure-asset"
            :src="whitehouseLogo"
            alt=""
            width="254"
            height="118"
          />
        </picture>
      </figure>
    </a>

    <div class="wp-block-whitehouse-footer__center--newsletter">
      <h3
        class="wp-block-whitehouse-footer__center--newsletter-heading wp-block-heading"
      >
        Subscribe to The White House newsletter
      </h3>

      <div
        class="wp-block-whitehouse-newsletter__form wp-block-whitehouse-newsletter-field"
        data-wp-interactive="whitehouse-newsletter"
      >
        <div>
          <fieldset class="wp-block-whitehouse-newsletter__form--fieldset">
            <div class="wp-block-whitehouse-newsletter__form--field">
              <input
                type="email"
                value=""
                name="EMAIL"
                placeholder="Your email"
                title="Your email"
              />
            </div>
            <div
              class="wp-block-whitehouse-newsletter__form--field honeypot"
              style="position: absolute; left: -5000px"
              aria-hidden="true"
            >
              <label for="mailchimp-signup-form-16">Please leave blank.</label>
              <input
                id="mailchimp-signup-form-16"
                type="text"
                name="b_255057cc391ca0facb169b81c_004f59aa22"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="wp-block-whitehouse-newsletter__form--submit-wrapper">
              <input type="submit" value="Sign Up" class="wp-element-button" />
            </div>
          </fieldset>
        </div>
        <div class="wp-block-whitehouse-newsletter__form--responses"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import './_styles/wp-block-whitehouse-footer__center.css';
</style>
