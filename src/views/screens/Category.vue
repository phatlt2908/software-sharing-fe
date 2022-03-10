<template>
  <div id="category">
    <div class="popular-list">
      <section class="section">
        <div class="container">
          <h1 class="title">Xem nhiều nhất</h1>
          <h2 class="subtitle">
            Có thể bạn cũng đang cần những phần mềm dưới đây
          </h2>
        </div>
      </section>
      <Slider v-if="isLoadedPopular" :sliderList="popularList" />
      <div v-else class="columns is-centered">
        <font-awesome-icon icon="circle-notch" class="fa-spin" size="5x" />
      </div>
    </div>

    <section id="list" class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters-desktop">
            <h1 class="title">Gần đây</h1>
            <nav
              class="pagination is-centered"
              role="navigation"
              aria-label="pagination"
            >
              <a v-show="page > 1" class="pagination-previous" @click="changePage(page - 1)">Trước</a>
              <a v-show="page < totalPage" class="pagination-next" @click="changePage(page + 1)">Trang sau</a>
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
            <div v-if="isLoadedNewestList" class="columns is-multiline is-mobile soft-list">
              <div
                v-for="post in newestList"
                :key="post.id"
                class="
                  column
                  is-full-mobile
                  is-full-tablet
                  is-full-desktop
                  is-full-widescreen
                  is-full-fullhd
                "
                @click="directDetail(post.code)"
              >
                <div class="card">
                  <div class="columns">
                    <div class="card-image column is-4">
                      <img :src="post.imageUrl" alt="Placeholder image" />
                    </div>
                    <div class="card-content column is-8 pr-2">
                      <div class="media pr-4">
                        <div class="media-content">
                          <p class="title is-4">
                            {{ post.title }}
                          </p>
                        </div>
                      </div>

                      <div class="content pr-4">
                        {{ post.description }}
                      </div>

                      <post-info 
                        :createdDate="post.createdDate"
                        :readNum="post.readNum"
                        :commentNum="post.commentNum"
                        class="pr-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="columns is-centered">
              <font-awesome-icon icon="circle-notch" class="fa-spin" size="5x" />
            </div>
            <hr />
            <nav
              class="pagination is-centered"
              role="navigation"
              aria-label="pagination"
            >
              <a v-show="page > 1" class="pagination-previous" @click="changePage(page - 1)">Trước</a>
              <a v-show="page < totalPage" class="pagination-next" @click="changePage(page + 1)">Trang sau</a>
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
import PostInfo from '../components/PostInfo.vue';
import categoryConst from '@/constants/categoryConst';

export default {
  name: "Category",
  components: {
    Slider,
    Side,
    PostInfo,
  },
  data() {
    return {
      categoryCode: this.$route.name,
      popularList: [],
      itemsPerPage: 10,
      page: 1,
      newestList: [],
      totalPage: 1,
      isLoadedPopular: false,
      isLoadedNewestList: false
    };
  },
  created() {
    this.$store.dispatch("changeCategory", {categoryCode: this.categoryCode});
    this.page = parseInt(this.$route.query.page) || 1;
    this.getPopularPost();
    this.getNewestPost();
  },
  methods: {
    getPopularPost() {
      this.isLoadedPopular = false;
      postAPI
        .getPopularCategoryPost(this.categoryCode)
        .then((res) => {
          this.popularList = res.data.postList;
          this.isLoadedPopular = true;
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
      this.isLoadedNewestList = false;
      postAPI
        .getNewestCategoryPost(request)
        .then((res) => {
          this.newestList = res.data.postList;
          const totalPost = res.data.totalPost;
          this.totalPage = Math.ceil(totalPost / this.itemsPerPage);
          this.isLoadedNewestList = true;
        })
        .catch((err) => {
          console.error("Load newest post list failed ", err);
        });
    },
    changePage(page) {
      this.page = page;
      this.$router.push({ query: { page: this.page }, hash: '#list' });
      this.getNewestPost();
    },
    changeCategory() {
      this.page = 1;
      this.$router.push({ query: { page: this.page } });
      this.getNewestPost();
    },
    directDetail(postCode) {
      this.$router.push({ name: "postDetail", query: { postCode: postCode } });
    },
    isCorrectCategory(categoryCode) {
      return categoryCode == categoryConst.GAME.categoryCode ||
          categoryCode == categoryConst.OFFICE.categoryCode ||
          categoryCode == categoryConst.GRAPHIC.categoryCode ||
          categoryCode == categoryConst.TECHNIQUE.categoryCode ||
          categoryCode == categoryConst.OS.categoryCode ||
          categoryCode == categoryConst.COMMON.categoryCode;
    }
  },
  watch: {
    "$route.name"() {
      if (this.isCorrectCategory(this.$route.name)) {
        this.categoryCode = this.$route.name;
        this.changeCategory();
        this.getPopularPost();
      }
    },
    categoryCode() {
      this.$store.dispatch("changeCategory", {categoryCode: this.categoryCode});
    }
  },
};
</script>

<style lang="scss" src="@/assets/scss/category.scss"></style>