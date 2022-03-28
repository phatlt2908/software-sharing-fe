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
    <div class="side-popular-list">
      <h2 class="title is-4">Phổ biến</h2>
      <side-list :list="popularList" :isLoaded="isLoadedPopular" />
    </div>
    <div class="side-newest-list">
      <h2 class="title is-4">Gần đây</h2>
      <side-list :list="newestList" :isLoaded="isLoadedNewest" />
    </div>
    <div v-if="false" class="ads-component-side">ADs</div>
  </div>
</template>

<script>
import postAPI from "@/services/postAPI";
import SideList from "@/views/components/SideList.vue";
export default {
  name: "side",
  components: {
    SideList
  },
  data() {
    return {
      popularList: null,
      isLoadedPopular: false,
      newestList: null,
      isLoadedNewest: false,
    };
  },
  created() {
    this.getPopularList();
    this.getNewestList();
  },
  methods: {
    getPopularList() {
      postAPI
        .getPopularPost()
        .then((res) => {
          this.popularList = res.data.postList;
          this.isLoadedPopular = true;
        })
        .catch((err) => {
          console.error("Load popular post list failed ", err);
        });
    },
    getNewestList() {
      postAPI
        .getNewestPost()
        .then((res) => {
          this.newestList = res.data.postList;
          this.isLoadedNewest = true;
        })
        .catch((err) => {
          console.error("Load newest post list failed ", err);
        });
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/side.scss"></style>
