<template>
  <div>
    <Top />
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="columns">
          <div class="column bd-index-content">
            <h1 class="title has-text-black">
              404 not found!
            </h1>
            <div class="content">
              <p>
                Trang bạn chọn không tồn tại! :((
              </p>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Top from "@/views/components/Top.vue";

export default {
  name: "Home",
  components: {
    Top,
  },
};
</script>

<style scoped>
.content p {
  font-size: 1.5em;
}
</style>
