<template>
  <div id="slider">
    <div class="bd-best">
      <div class="bd-best-list">
        <div
          v-for="slider in sliderList"
          :key="slider"
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
              <br />
              <time class="has-text-grey" datetime="2016-1-1">{{
                slider.createdDate
              }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider",
  props: {
    sliderList: null,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" src="@/assets/scss/slider.scss"></style>
