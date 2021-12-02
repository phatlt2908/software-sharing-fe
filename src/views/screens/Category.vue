<template>
  <div id="category">
    <section class="section">
      <div class="container">
        <h1 class="title">Xem nhiều nhất</h1>
        <h2 class="subtitle">
          Có thể bạn cũng đang cần những phần mềm dưới đây
        </h2>
      </div>
    </section>
    <Slider />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters-desktop">
            <h1 class="title">Gần đây</h1>
            <div class="columns is-multiline is-mobile soft-list">
              <div
                v-for="item in itemList"
                :key="item"
                class="
                  column
                  is-full-mobile
                  is-full-tablet
                  is-full-desktop
                  is-half-widescreen
                  is-half-fullhd
                "
              >
                <div class="card">
                  <div class="columns">
                    <div class="card-image column is-4">
                      <img
                        src="https://ecci.com.vn/wp-content/uploads/2021/08/office-professional-plus-2016.jpg"
                        alt="Placeholder image"
                      />
                    </div>
                    <div class="card-content column is-8">
                      <div class="media">
                        <div class="media-content">
                          <p class="title is-4">
                            Download Office 2016 Full Vĩnh Viễn
                          </p>
                        </div>
                      </div>

                      <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
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
          </div>
          <div class="column">
            <Side />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from "@/views/components/Slider.vue";
import Side from "@/views/components/Side.vue";

export default {
  name: "Category",
  components: {
    Slider,
    Side
  },
  data() {
    return {
      itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  }
};
</script>

<style lang="scss" src="@/assets/scss/category.scss"></style>