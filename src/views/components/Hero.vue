<template>
  <div id="hero">
    <div class="hero is-medium bd-hero" :class="color">
      <div class="hero-body">
        <div class="container">
          <div class="bd-hero-body">
            <div class="bd-hero-heading">
              <h1 class="title is-2">
                Ý! Đây nè! Nơi chia sẻ phần mềm, ứng dụng, games...<br />
                Hoàn toàn miễn phí
              </h1>
              <p class="subtitle is-3 mt-3">
                Ý! Đây nè! là miễn phí, <strong>không</strong> dẫn đến các link
                rác, <strong>không</strong> phải làm các bước phức tạp để tìm
                mật khẩu file nén
              </p>
              <div class="icon-text has-text-success">
                <span class="icon">
                  <font-awesome-icon icon="check-square" />
                </span>
                <strong
                  >Bạn không cần nhiều kiến thức về máy tính, chỉ cần làm theo
                  hướng dẫn</strong
                >
              </div>
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
      color: null,
    };
  },
  created() {
    this.updateColor();
  },
  methods: {
    updateColor() {
      this.color = service.getCategoryColor(this.$route.name);
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
