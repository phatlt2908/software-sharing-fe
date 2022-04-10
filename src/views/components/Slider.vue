<template>
  <div id="slider">
    <div class="bd-best">
      <carousel :settings="settings" :breakpoints="breakpoints" class="bd-best-list">
        <slide
          v-for="slider in sliderList"
          :key="slider"
          class="bd-tw bd-best-item bd-is-large"
        >
          <router-link
            class="card"
            :class="background"
            :to="{ name: 'postDetail', params: { postCode: slider.code } }"
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
          </router-link>
        </slide>

        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import PostInfo from "./PostInfo.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  components: {
    PostInfo,
    Carousel,
    Slide,
    Pagination,
  },
  name: "slider",
  props: {
    sliderList: null,
    isAutoPlay: {
      type: Boolean,
      default: true
    },
    background: null
  },
  data() {
    return {
      settings: {
        itemsToShow: 1.2,
        snapAlign: "center",
        wrapAround: true,
        transition: 300,
        autoplay: this.isAutoPlay ? 3000 : 0,
        pauseAutoplayOnHover: true,
        mouseDrag: true,
        touchDrag: true,
      },
      breakpoints: {
        700: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        1300: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>

<style lang="scss" src="@/assets/scss/slider.scss"></style>
