<template>
  <div id="slider">
    <div class="bd-best">
      <div class="bd-best-list">
        <div
          v-for="product in popularList"
          :key="product"
          class="card bd-tw bd-best-item bd-is-large"
        >
          <div class="card-image">
            <img
              src="https://ecci.com.vn/wp-content/uploads/2021/08/office-professional-plus-2016.jpg"
              alt="Placeholder image"
            />
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Download Office 2016 Full Vĩnh Viễn</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <br />
              <time class="has-text-grey" datetime="2016-1-1"
                >11:09 PM - 1 Jan 2016</time
              >
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
  data() {
    return {
      popularList: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      ],
    };
  },
};
</script>

<style lang="scss" src="@/assets/scss/slider.scss"></style>
