<template>
  <div id="hero">
    <div class="hero is-medium bd-hero" :class="categoryInfo.color">
      <div class="hero-body">
        <div class="container">
          <div class="bd-hero-body">
            <div class="bd-hero-heading">
              <h1 class="title is-2">
                <span class="icon">
                  <font-awesome-icon :icon="categoryInfo.icon" />
                </span>
                <p>{{ categoryInfo.title }}</p>
              </h1>
              <p class="subtitle is-3 mt-3">
                {{ categoryInfo.subtitle }}
              </p>
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
import service from "@/service";

export default {
  name: "hero",
  data() {
    return {
      categoryInfo: null,
    };
  },
  created() {
    this.updateColor();
  },
  methods: {
    updateColor() {
      this.categoryInfo = service.getCategoryDisplayInfo(this.$route.name);
    },
  },
  watch: {
    $route() {
      this.updateColor();
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/hero.scss"></style>
