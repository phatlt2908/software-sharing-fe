<template>
  <div id="slider">
    <div class="bd-best">
      <div class="bd-best-list">
        <div
          v-for="slider in sliderList"
          :key="slider"
          @click="directDetail(slider.code)"
          class="card bd-tw bd-best-item bd-is-large"
        >
          <div v-show="slider.imageUrl" class="card-image">
            <img :src="slider.imageUrl" alt="Placeholder image" />
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ slider.title }}</p>
              </div>
            </div>
            <div class="content">
              {{ slider.description }}
            </div>
            <post-info 
              :createdDate="slider.createdDate"
              :readNum="slider.readNum"
              :commentNum="slider.commentNum"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostInfo from "./PostInfo.vue";
export default {
  components: { PostInfo },
  name: "slider",
  props: {
    sliderList: null,
  },
  data() {
    return {};
  },
  methods: {
    directDetail(postCode) {
      this.$router.push({ name: "postDetail", query: { postCode: postCode } });
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/slider.scss"></style>
