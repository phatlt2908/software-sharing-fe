<template>
  <div id="hero">
    <div class="hero is-medium bd-hero" :class="category ? category.color : ''">
      <div class="hero-body">
        <div class="container">
          <div class="bd-hero-body">
            <div class="bd-hero-heading">
              <h1 class="title is-2">
                <span class="icon">
                  <font-awesome-icon v-if="category && category.icon" :icon="category.icon" />
                </span>
                <p v-if="category && category.title">{{ category.title }}</p>
              </h1>
              <h1 v-if="category && category.subtitle" class="subtitle is-3 mt-3">
                {{ category.subtitle }}
              </h1>
              <slot></slot>
            </div>
            <div class="bd-hero-carbon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "hero",
  computed: {
    ...mapState(["category"])
  }
};
</script>

<style lang="scss" src="@/assets/scss/hero.scss"></style>
