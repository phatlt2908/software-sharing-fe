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
    <Slider :sliderList="popularList" />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters-desktop">
            <h1 class="title">Gần đây</h1>
            <nav
              class="pagination is-centered"
              role="navigation"
              aria-label="pagination"
            >
              <a class="pagination-previous">Trước</a>
              <a class="pagination-next">Trang sau</a>
              <ul class="pagination-list">
                <li v-if="page >= 3">
                  <a class="pagination-link" @click="changePage(1)">1</a>
                </li>
                <li v-if="page >= 4">
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li v-if="page >= 2">
                  <a class="pagination-link" @click="changePage(page - 1)">{{
                    page - 1
                  }}</a>
                </li>
                <li>
                  <a
                    class="pagination-link is-current"
                    aria-label="Page 46"
                    aria-current="page"
                    @click="changePage(page)"
                    >{{ page }}</a
                  >
                </li>
                <li v-if="page <= totalPage - 1">
                  <a class="pagination-link" @click="changePage(page + 1)">{{
                    page + 1
                  }}</a>
                </li>
                <li v-if="page <= totalPage - 3">
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li v-if="page <= totalPage - 2">
                  <a class="pagination-link" @click="changePage(totalPage)">{{
                    totalPage
                  }}</a>
                </li>
              </ul>
            </nav>
            <hr />
            <div class="columns is-multiline is-mobile soft-list">
              <div
                v-for="post in newestList"
                :key="post.id"
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
                            {{ post.title }}
                          </p>
                        </div>
                      </div>

                      <div class="content">
                        {{ post.description }}
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
            <hr />
            <nav
              class="pagination is-centered"
              role="navigation"
              aria-label="pagination"
            >
              <a class="pagination-previous">Trước</a>
              <a class="pagination-next">Trang sau</a>
              <ul class="pagination-list">
                <li v-if="page >= 3">
                  <a class="pagination-link" @click="changePage(1)">1</a>
                </li>
                <li v-if="page >= 4">
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li v-if="page >= 2">
                  <a class="pagination-link" @click="changePage(page - 1)">{{
                    page - 1
                  }}</a>
                </li>
                <li>
                  <a
                    class="pagination-link is-current"
                    aria-label="Page 46"
                    aria-current="page"
                    @click="changePage(page)"
                    >{{ page }}</a
                  >
                </li>
                <li v-if="page <= totalPage - 1">
                  <a class="pagination-link" @click="changePage(page + 1)">{{
                    page + 1
                  }}</a>
                </li>
                <li v-if="page <= totalPage - 3">
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li v-if="page <= totalPage - 2">
                  <a class="pagination-link" @click="changePage(totalPage)">{{
                    totalPage
                  }}</a>
                </li>
              </ul>
            </nav>
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
import postAPI from "@/services/postAPI";

export default {
  name: "Category",
  components: {
    Slider,
    Side,
  },
  data() {
    return {
      categoryCode: this.$route.name,
      popularList: [],
      itemsPerPage: 10,
      page: 1,
      newestList: [],
      totalPage: 1,
    };
  },
  created() {
    this.page = this.$route.query.page || 1;
    this.getPopularPost();
    this.getNewestPost();
  },
  methods: {
    getPopularPost() {
      postAPI
        .getPopularCategoryPost(this.categoryCode)
        .then((res) => {
          this.popularList = res.data.postList;
        })
        .catch((err) => {
          console.error("Load popular post list failed ", err);
        });
    },
    getNewestPost() {
      let request = {
        categoryCode: this.categoryCode,
        itemsPerPage: this.itemsPerPage,
        page: this.page,
      };
      postAPI
        .getNewestCategoryPost(request)
        .then((res) => {
          this.newestList = res.data.postList;
          const totalPost = res.data.totalPost;
          this.totalPage = Math.ceil(totalPost / this.itemsPerPage);
        })
        .catch((err) => {
          console.error("Load newest post list failed ", err);
        });
    },
    changePage(page) {
      this.page = page;
      this.getNewestPost();
    },
  },
  watch: {
    "$route.name"() {
      this.categoryCode = this.$route.name;
      this.getPopularPost();
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/category.scss"></style>