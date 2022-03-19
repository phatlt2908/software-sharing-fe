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
      <h2 class="title is-4">Thẻ</h2>
      <span
        v-for="tag in tagList"
        :key="tag.value"
        class="tag is-light is-primary mr-1 mb-1"
        :class="getTagDisplay()"
        >{{ tag.value }}</span
      >
    </div>
    <div class="ads-component-side">ADs</div>
  </div>
</template>

<script>
import postAPI from "@/services/postAPI";
export default {
  name: "side",
  data() {
    return {
      tagList: [],
    };
  },
  created() {
    this.getTagList();
  },
  methods: {
    getTagDisplay() {
      let ranSize = Math.floor(Math.random() * 3);
      switch (ranSize) {
        case 0:
          return "is-large";
        case 1:
          return "is-medium";
        case 2:
          return "is-normal";
        default:
          break;
      }
    },
    getTagList() {
      postAPI
        .getTagList()
        .then((res) => {
          this.tagList = res.data;
        })
        .catch((err) => {
          console.error("Get tag list failed ", err);
        });
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/side.scss"></style>
