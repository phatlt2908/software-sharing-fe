<template>
  <div id="hero">
    <div class="hero is-medium bd-hero" :class="displayInfo.color">
      <div class="hero-body">
        <div class="container">
          <div class="bd-hero-body">
            <div class="bd-hero-heading">
              <h1 class="title is-2">
                <span class="icon">
                  <font-awesome-icon :icon="displayInfo.icon" />
                </span>
                <p>{{ displayInfo.title }}</p>
              </h1>
              <p class="subtitle is-3 mt-3">
                {{ displayInfo.subtitle }}
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
export default {
  name: "hero",
  data() {
    return {
      displayInfo: {
        color: "bd-is-game",
        icon: "gamepad",
        title: "",
        subtitle: ""
      },
    };
  },
  created() {
    this.updateDisplay();
  },
  methods: {
    updateDisplay() {
      this.displayInfo["color"] = this.$route.meta.color;
      this.displayInfo["icon"] = this.$route.meta.icon;
      this.displayInfo["title"] = this.$route.meta.title;
      this.displayInfo["subtitle"] = this.$route.meta.subtitle;
    },
  },
  watch: {
    $route() {
      this.updateDisplay();
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/hero.scss"></style>
