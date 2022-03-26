<template>
  <div id="side">
    <div class="facebook mb-5">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdayne.run&tabs=timeline&width=340&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=190324515024845"
        width="340"
        height="400"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        data-hide-cover="false"
        data-show-facepile="false"
      ></iframe>
    </div>
    <div class="tag-list mb-5">
      <h2 class="title is-4">Phổ biến</h2>
    </div>
    <div class="tag-list mb-5">
      <h2 class="title is-4">Gần đây</h2>
    </div>
    <div class="ads-component-side">ADs</div>
  </div>
</template>

<script>
// import postAPI from "@/services/postAPI";
export default {
  name: "side",
  data() {
    return {
      tagList: [],
    };
  },
  created() {
  },
  methods: {
  },
};
</script>

<style lang="scss" src="@/assets/scss/side.scss"></style>
