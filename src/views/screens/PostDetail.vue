<template>
  <div id="postDetail">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters-desktop">
            <article v-if="loaded">
              <div class="content" v-html="postDetail.description"></div>
              <div class="content" v-html="postDetail.content"></div>
              <!-- Link download -->
              <div id="link">
                <button
                  v-for="link in postLinkDownloads"
                  :key="link.id"
                  @click="directToDownload(link)"
                  class="button is-primary is-medium"
                >
                  <span class="icon is-medium">
                    <font-awesome-icon icon="download" />
                  </span>
                  <span>{{ link.typeName }}</span>
                </button>
              </div>
            </article>
          </div>
          <div class="column">
            <side />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">Xem nhiều nhất</h1>
        <h2 class="subtitle">
          Có thể bạn cũng đang cần những phần mềm dưới đây
        </h2>
      </div>
    </section>
    <Slider />

    <a href="#link" class="button is-rounded is-primary is-medium">
      <span class="icon">
        <font-awesome-icon icon="download" />
      </span>
    </a>
  </div>
</template>

<script>
import Slider from "@/views/components/Slider.vue";
import Side from "@/views/components/Side.vue";
import postAPI from "@/services/postAPI";

export default {
  name: "PostDetail",
  components: {
    Slider,
    Side,
  },
  data() {
    return {
      loaded: false,
      postCode: null,
      postDetail: null,
      postLinkDownloads: null,
    };
  },
  created() {
    this.postCode = this.$route.query.postCode;
    this.loadDetail();
  },
  mounted() {
    this.$route.meta.color = "bd-is-tech";
          this.$route.meta.icon = "drafting-compass";
          this.$route.meta.title;
          this.$route.meta.subtitle;
          this.$forceUpdate();
    window.setTimeout(() => {
      postAPI
        .updateReadNum(this.postCode)
        .then(() => {})
        .catch((err) => {
          console.error("Load post detail failed ", err);
        });
    }, 10000);
  },
  methods: {
    loadDetail() {
      postAPI
        .getPostDetail(this.postCode)
        .then((res) => {
          this.postDetail = res.data.post;
          this.postLinkDownloads = res.data.links;
          this.loaded = true;

          this.$route.meta.color = "bd-is-tech";
          this.$route.meta.icon = "drafting-compass";
          this.$route.meta.title;
          this.$route.meta.subtitle;
        })
        .catch((err) => {
          console.error("Load post detail failed ", err);
          this.$swal({
            icon: "error",
            title: "Không load được nội dung bài post :(",
            timer: 3000,
            showConfirmButton: true,
            type: "error",
          });
        });
    },
    directToDownload(link) {
      window.open(link.url, "_blank");
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/postDetail.scss"></style>