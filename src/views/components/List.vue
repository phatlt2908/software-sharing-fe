<template>
  <div id="list">
    <div v-if="paging.totalPage > 1">
      <nav
        class="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <a
          v-show="paging.page > 1"
          class="pagination-previous"
          @click="changePage(paging.page - 1)"
          >Trước</a
        >
        <a
          v-show="paging.page < paging.totalPage"
          class="pagination-next"
          @click="changePage(paging.page + 1)"
          >Trang sau</a
        >
        <ul class="pagination-list">
          <li v-if="paging.page >= 3">
            <a class="pagination-link" @click="changePage(1)">1</a>
          </li>
          <li v-if="paging.page >= 4">
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li v-if="paging.page >= 2">
            <a class="pagination-link" @click="changePage(paging.page - 1)">{{
              paging.page - 1
            }}</a>
          </li>
          <li>
            <a
              class="pagination-link is-current"
              aria-label="Page 46"
              aria-current="page"
              @click="changePage(paging.page)"
              >{{ paging.page }}</a
            >
          </li>
          <li v-if="paging.page <= paging.totalPage - 1">
            <a class="pagination-link" @click="changePage(paging.page + 1)">{{
              paging.page + 1
            }}</a>
          </li>
          <li v-if="paging.page <= paging.totalPage - 3">
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li v-if="paging.page <= paging.totalPage - 2">
            <a class="pagination-link" @click="changePage(paging.totalPage)">{{
              paging.totalPage
            }}</a>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
    <div v-if="isLoaded" class="columns is-multiline is-mobile soft-list">
      <div
        v-for="post in list"
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
    <div v-if="paging.totalPage > 1">
      <hr />
      <nav
        v-if="paging.totalPage > 1"
        class="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <a
          v-show="paging.page > 1"
          class="pagination-previous"
          @click="changePage(paging.page - 1)"
          >Trước</a
        >
        <a
          v-show="paging.page < paging.totalPage"
          class="pagination-next"
          @click="changePage(paging.page + 1)"
          >Trang sau</a
        >
        <ul class="pagination-list">
          <li v-if="paging.page >= 3">
            <a class="pagination-link" @click="changePage(1)">1</a>
          </li>
          <li v-if="paging.page >= 4">
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li v-if="paging.page >= 2">
            <a class="pagination-link" @click="changePage(paging.page - 1)">{{
              paging.page - 1
            }}</a>
          </li>
          <li>
            <a
              class="pagination-link is-current"
              aria-label="Page 46"
              aria-current="page"
              @click="changePage(paging.page)"
              >{{ paging.page }}</a
            >
          </li>
          <li v-if="paging.page <= paging.totalPage - 1">
            <a class="pagination-link" @click="changePage(paging.page + 1)">{{
              paging.page + 1
            }}</a>
          </li>
          <li v-if="paging.page <= paging.totalPage - 3">
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li v-if="paging.page <= paging.totalPage - 2">
            <a class="pagination-link" @click="changePage(paging.totalPage)">{{
              paging.totalPage
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import PostInfo from "@/views/components/PostInfo.vue";

export default {
  name: "list",
  components: {
    PostInfo,
  },
  data() {
    return {
      paging: null,
    };
  },
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    isLoaded: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.paging = Object.assign({}, this.pagination);
  },
  methods: {
    changePage(page) {
      this.paging.page = page;
      this.$emit("changePage", this.paging);
    },
    directDetail(postCode) {
      this.$router.push({ name: "postDetail", query: { postCode: postCode } });
      this.$emit("directDetail");
    },
  },
  watch: {
    pagination: {
      handler() {
        this.paging = Object.assign({}, this.pagination);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/list.scss"></style>
