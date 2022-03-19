<template>
  <div id="top">
    <nav class="bd-navbar navbar">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home' }" class="navbar-item">
          Đây Nè
        </router-link>
        <!-- <a>
          <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
        </a>
        <button
          id="searchIcon"
          class="navbar-item bd-navbar-search-icon bd-navbar-mobile-icon"
        >
          <span class="icon has-text-primary">
            <font-awesome-icon icon="search" size="lg" />
          </span>
        </button> -->
        <div
          class="navbar-burger"
          :class="{ 'is-active': isActiveMobile }"
          data-target="navbarExampleTransparentExample"
          @click="onBurger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        class="navbar-menu"
        id="navbarExampleTransparentExample"
        :class="{ 'is-active': isActiveMobile }"
      >
        <div class="navbar-start">
          <router-link :to="{ name: 'home' }" class="navbar-item">
            <span class="icon has-text-primary">
              <font-awesome-icon icon="home" />
            </span>
            <span>Trang chủ</span>
          </router-link>
          <router-link
            :to="{ name: 'game', query: { page: 1 } }"
            class="navbar-item"
          >
            <span class="icon has-text-danger">
              <font-awesome-icon icon="gamepad" />
            </span>
            <span>Games</span>
          </router-link>
          <router-link
            :to="{ name: 'office', query: { page: 1 } }"
            class="navbar-item"
          >
            <span class="icon has-text-info">
              <font-awesome-icon icon="print" />
            </span>
            <span>Văn phòng</span>
          </router-link>
          <router-link
            :to="{ name: 'graphic', query: { page: 1 } }"
            class="navbar-item"
          >
            <span class="icon has-text-success">
              <font-awesome-icon icon="paint-brush" />
            </span>
            <span>Đồ họa</span>
          </router-link>
          <router-link
            :to="{ name: 'technique', query: { page: 1 } }"
            class="navbar-item"
          >
            <span class="icon has-text-warning">
              <font-awesome-icon icon="drafting-compass" />
            </span>
            <span>Kỹ thuật</span>
          </router-link>
          <router-link
            :to="{ name: 'os', query: { page: 1 } }"
            class="navbar-item"
          >
            <span class="icon has-text-link">
              <font-awesome-icon :icon="['fab', 'windows']" />
            </span>
            <span>Hệ điều hành</span>
          </router-link>
          <router-link
            :to="{ name: 'common', query: { page: 1 } }"
            class="navbar-item"
          >
            <span class="icon has-text-black">
              <font-awesome-icon icon="file-archive" />
            </span>
            <span>Ai cũng cần</span>
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link
              :to="{ name: 'home' }"
              class="navbar-link is-arrowless"
            >
              <span class="has-text-link">
                <font-awesome-icon icon="ellipsis-h" />
              </span>
            </router-link>
            <div class="navbar-dropdown is-boxed">
              <router-link :to="{ name: 'home' }" class="navbar-item">
                Diệt virus
              </router-link>
              <hr class="navbar-divider" />
              <router-link :to="{ name: 'home' }" class="navbar-item">
                APK
              </router-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <a target="_blank" href="https://www.facebook.com/dayne.run/">
              <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div
        id="search"
        class="bd-search"
        :class="{ 'is-active': isActiveMobile }"
        @click="displaySearch"
      >
        <p class="control bd-search_box has-icons-left">
          <span class="bd-search_box_input">
            <input
              id="algoliaSearch"
              class="input is-rounded is-primary"
              type="text"
              placeholder="Tìm kiếm..."
              autocomplete="off"
              spellcheck="false"
              style="position: relative; vertical-align: top"
            />
          </span>
          <span class="icon is-small is-left has-text-primary">
            <font-awesome-icon icon="search" />
          </span>
        </p>
      </div>
    </nav>
    <div
      v-show="isDisplaySearch"
      class="modal modal-search is-active is-clipped"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <div
            id="search"
            class="bd-search modal-card-title pr-5"
            :class="{ 'is-active': isActiveMobile }"
          >
            <p class="control bd-search_box has-icons-left">
              <span class="bd-search_box_input">
                <input
                  id="algoliaSearch"
                  class="input is-rounded is-primary"
                  type="text"
                  placeholder="Tìm kiếm..."
                  autocomplete="off"
                  spellcheck="false"
                  style="position: relative; vertical-align: top"
                  v-model="keyword"
                  @keydown.enter="search"
                  ref="searchInput"
                />
                <div @click="search" class="control search-button">
                  <a class="button is-primary is-rounded"
                    ><font-awesome-icon icon="search"
                  /></a>
                </div>
              </span>
              <span class="icon is-small is-left has-text-primary">
                <font-awesome-icon icon="search" />
              </span>
            </p>
          </div>
          <button
            @click="displaySearch"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="column is-full">
            <list
              v-if="searchList && searchList.length"
              :pagination="pagination"
              :list="searchList"
              :isLoaded="isLoaded"
              @changePage="changePage"
              @directDetail="displaySearch"
            />
            <span
              v-else
              v-for="tag in tagList"
              :key="tag.value"
              class="tag is-light is-primary mr-1 mb-1"
              :class="getTagDisplay()"
              >{{ tag.value }}</span
            >
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import postAPI from "@/services/postAPI";
import List from "@/views/components/List.vue";

export default {
  name: "top",
  components: {
    List,
  },
  data() {
    return {
      isActiveMobile: false,
      isDisplaySearch: false,
      keyword: "",
      pagination: {
        itemsPerPage: 10,
        page: 1,
        totalPage: 1,
      },
      searchList: [],
      isLoaded: false,
      tagList: [],
    };
  },
  created() {
    this.getTagList();
  },
  methods: {
    onBurger() {
      this.isActiveMobile = !this.isActiveMobile;
    },
    search() {
      let request = {
        keyword: this.keyword,
        itemsPerPage: this.pagination.itemsPerPage,
        page: this.pagination.page,
      };
      this.isLoaded = false;
      postAPI
        .searchPost(request)
        .then((res) => {
          this.searchList = res.data.postList;
          const totalPost = res.data.totalPost;
          this.pagination.totalPage = Math.ceil(
            totalPost / this.pagination.itemsPerPage
          );
          this.isLoaded = true;
        })
        .catch((err) => {
          console.error("Load newest post list failed ", err);
        });
    },
    displaySearch() {
      this.isDisplaySearch = !this.isDisplaySearch;
      this.$nextTick(() => {
        this.$refs.searchInput.focus();
      });
    },
    changePage(pagination) {
      this.pagination = pagination;
      this.search();
    },
    getTagList() {
      postAPI
        .getTagList()
        .then((res) => {
          this.tagList = res.data;
        })
        .catch((err) => {
          console.error("Get tag list failed ", err);
        });
    },
    getTagDisplay() {
      let ranSize = Math.floor(Math.random() * 3);
      switch (ranSize) {
        case 0:
          return "is-large";
        case 1:
          return "is-medium";
        case 2:
          return "is-normal";
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/top.scss"></style>
