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
            <list 
              v-if="newestList && newestList.length"
              :pagination="pagination"
              :list="newestList"
              :isLoaded="isLoadedNewestList"
              @changePage="changePage"
            />
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
import List from '@/views/components/List.vue';
import categoryConst from '@/constants/categoryConst';

export default {
  name: "Category",
  components: {
    Slider,
    Side,
    List
  },
  data() {
    return {
      categoryCode: this.$route.name,
      popularList: [],
      newestList: [],
      isLoadedPopular: false,
      isLoadedNewestList: false,
      pagination: {
        itemsPerPage: 10,
        page: 1,
        totalPage: 1
      }
    };
  },
  created() {
    this.$store.dispatch("changeCategory", {categoryCode: this.categoryCode});
    this.pagination.page = parseInt(this.$route.query.page) || 1;
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
        itemsPerPage: this.pagination.itemsPerPage,
        page: this.pagination.page,
      };
      this.isLoadedNewestList = false;
      postAPI
        .getNewestCategoryPost(request)
        .then((res) => {
          this.newestList = res.data.postList;
          const totalPost = res.data.totalPost;
          this.pagination.totalPage = Math.ceil(totalPost / this.pagination.itemsPerPage);
          this.isLoadedNewestList = true;
        })
        .catch((err) => {
          console.error("Load newest post list failed ", err);
        });
    },
    changePage(pagination) {
      this.$router.push({ query: { page: pagination.page }, hash: "#list" });
      this.pagination = pagination;
      this.getNewestPost();
    },
    changeCategory() {
      this.pagination.page = 1;
      this.$router.push({ query: { page: this.pagination.page } });
      this.getNewestPost();
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