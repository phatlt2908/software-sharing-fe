<template>
  <div>
    <Top />
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="columns">
          <div class="column bd-index-content">
            <h1 class="title has-text-black">
              <strong>Đây nè!</strong> Nơi chia sẻ <strong>phần mềm</strong>,
              <strong>ứng dụng</strong>, <strong>games</strong>...<br />
              Hoàn toàn <strong>miễn phí</strong>
            </h1>
            <div class="content">
              <p>
                <strong>Không</strong> dẫn đến các link rác,
                <strong>không</strong> phải làm các bước phức tạp để tìm mật
                khẩu file nén
              </p>
            </div>
            <div class="icon-text has-text-success">
              <span class="icon">
                <font-awesome-icon icon="check-square" />
              </span>
              <strong
                >Bạn không cần nhiều kiến thức về máy tính, chỉ cần làm theo
                hướng dẫn</strong
              >
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
    <div class="popular-list">
      <section class="section pb-0">
        <div class="container">
          <h1 class="title text-center">Nổi bật</h1>
          <h2 class="subtitle text-center">Bài đăng được xem nhiều nhất</h2>
          <hr>
        </div>
      </section>
      <Slider
        v-if="popularList && popularList.length"
        :sliderList="popularList"
        :isAutoPlay="false"
      />
      <div v-else class="columns is-centered pb-3 mb-3">
        <font-awesome-icon icon="circle-notch" class="fa-spin" size="5x" />
      </div>
    </div>
    <div class="background-office">
      <section class="section pb-0">
        <div class="container">
          <router-link :to="{ name: 'office' }">
            <h1 class="title text-center">Phần mềm văn phòng</h1>
            <hr>
          </router-link>
        </div>
      </section>
      <Slider
        v-if="officeList && officeList.length"
        :sliderList="officeList"
        :isAutoPlay="false"
        class="background-office"
        :background="'background-office'"
      />
      <div v-else class="columns is-centered pb-3 mb-3">
        <font-awesome-icon icon="circle-notch" class="fa-spin" size="5x" />
      </div>
    </div>
    <div class="background-game">
      <section class="section pb-0">
        <div class="container">
          <router-link :to="{ name: 'game' }">
            <h1 class="title text-center">Game</h1>
            <hr>
          </router-link>
        </div>
      </section>
      <Slider
        v-if="gameList && gameList.length"
        :sliderList="gameList"
        :isAutoPlay="false"
        class="background-game"
        :background="'background-game'"
      />
      <div v-else class="columns is-centered pb-3 mb-3">
        <font-awesome-icon icon="circle-notch" class="fa-spin" size="5x" />
      </div>
    </div>
    <div class="background-graphic">
      <section class="section pb-0">
        <div class="container">
          <router-link :to="{ name: 'graphic' }">
            <h1 class="title text-center">Phần mềm đồ họa</h1>
            <hr>
          </router-link>
        </div>
      </section>
      <Slider
        v-if="graphicList && graphicList.length"
        :sliderList="graphicList"
        :isAutoPlay="false"
        class="background-graphic"
        :background="'background-graphic'"
      />
      <div v-else class="columns is-centered pb-3 mb-3">
        <font-awesome-icon icon="circle-notch" class="fa-spin" size="5x" />
      </div>
    </div>
    <div class="background-technique">
      <section class="section pb-0">
        <div class="container">
          <router-link :to="{ name: 'technique' }">
            <h1 class="title text-center">Phần mềm kỹ thuật</h1>
            <hr>
          </router-link>
        </div>
      </section>
      <Slider
        v-if="techniqueList && techniqueList.length"
        :sliderList="techniqueList"
        :isAutoPlay="false"
        class="background-technique"
        :background="'background-technique'"
      />
      <div v-else class="columns is-centered pb-3 mb-3">
        <font-awesome-icon icon="circle-notch" class="fa-spin" size="5x" />
      </div>
    </div>
    <div class="background-os">
      <section class="section pb-0">
        <div class="container">
          <router-link :to="{ name: 'os' }">
            <h1 class="title text-center">Hệ điều hành</h1>
            <hr>
          </router-link>
        </div>
      </section>
      <Slider
        v-if="osList && osList.length"
        :sliderList="osList"
        :isAutoPlay="false"
        class="background-os"
        :background="'background-os'"
      />
      <div v-else class="columns is-centered pb-3 mb-3">
        <font-awesome-icon icon="circle-notch" class="fa-spin" size="5x" />
      </div>
    </div>
    <div>
      <section class="section background-gray">
        <div class="container">
          <router-link :to="{ name: 'common' }">
            <h1 class="title text-center">Ai cũng cần</h1>
            <hr>
          </router-link>
        </div>
      </section>
      <Slider
        v-if="commonList && commonList.length"
        :sliderList="commonList"
        :isAutoPlay="false"
        class="background-gray"
        :background="'background-gray'"
      />
      <div v-else class="columns is-centered pb-3 mb-3">
        <font-awesome-icon icon="circle-notch" class="fa-spin" size="5x" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import postAPI from "@/services/postAPI";
import Top from "@/views/components/Top.vue";
import Footer from "@/views/components/Footer.vue";
import Slider from "@/views/components/Slider.vue";

export default {
  name: "Home",
  components: {
    Top,
    Footer,
    Slider,
  },
  data() {
    return {
      popularList: [],
      officeList: [],
      gameList: [],
      graphicList: [],
      techniqueList: [],
      osList: [],
      commonList: [],
    };
  },
  created() {
    this.getPopularList();
    this.getOfficeList();
    this.getGameList();
    this.getGraphicList();
    this.getTechniqueList();
    this.getOsList();
    this.getCommonList();
  },
  methods: {
    getPopularList() {
      const request = {
        itemsPerPage: 10,
        page: 1,
      };
      postAPI
        .getPopularPost(request)
        .then((res) => {
          this.popularList = res.data.postList;
        })
        .catch((err) => {
          console.error("Load popular post list failed ", err);
        });
    },
    getOfficeList() {
      const request = {
        categoryCode: "office",
        itemsPerPage: 10,
        page: 1,
      };
      postAPI
        .getNewestCategoryPost(request)
        .then((res) => {
          this.officeList = res.data.postList;
        })
        .catch((err) => {
          console.error("Load office list failed ", err);
        });
    },
    getGameList() {
      const request = {
        categoryCode: "game",
        itemsPerPage: 10,
        page: 1,
      };
      postAPI
        .getNewestCategoryPost(request)
        .then((res) => {
          this.gameList = res.data.postList;
        })
        .catch((err) => {
          console.error("Load game list failed ", err);
        });
    },
    getGraphicList() {
      const request = {
        categoryCode: "graphic",
        itemsPerPage: 10,
        page: 1,
      };
      postAPI
        .getNewestCategoryPost(request)
        .then((res) => {
          this.graphicList = res.data.postList;
        })
        .catch((err) => {
          console.error("Load game list failed ", err);
        });
    },
    getTechniqueList() {
      const request = {
        categoryCode: "technique",
        itemsPerPage: 10,
        page: 1,
      };
      postAPI
        .getNewestCategoryPost(request)
        .then((res) => {
          this.techniqueList = res.data.postList;
        })
        .catch((err) => {
          console.error("Load technique list failed ", err);
        });
    },
    getOsList() {
      const request = {
        categoryCode: "os",
        itemsPerPage: 10,
        page: 1,
      };
      postAPI
        .getNewestCategoryPost(request)
        .then((res) => {
          this.osList = res.data.postList;
        })
        .catch((err) => {
          console.error("Load os list failed ", err);
        });
    },
    getCommonList() {
      const request = {
        categoryCode: "common",
        itemsPerPage: 10,
        page: 1,
      };
      postAPI
        .getNewestCategoryPost(request)
        .then((res) => {
          this.commonList = res.data.postList;
        })
        .catch((err) => {
          console.error("Load common list failed ", err);
        });
    },
  },
};
</script>

<style scoped>
.content p {
  font-size: 1.5em;
}
</style>
