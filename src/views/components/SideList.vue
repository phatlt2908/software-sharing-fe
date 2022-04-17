<template>
  <div id="sideList">
    <div v-if="isLoaded" class="columns is-multiline is-mobile soft-list">
      <router-link
        :to="{ name: 'postDetail', params: { postCode: post.code } }"
        v-for="post in list"
        :key="post.id"
        class="column is-full"
        @click="directDetail(post.code)"
      >
        <div class="card">
          <div class="columns mb-0">
            <div class="card-image column is-4 pb-0">
              <img :src="post.imageUrl" referrerpolicy="no-referrer" :alt="post.imageAlt" />
            </div>
            <div class="side-list_card-content column is-8 pr-2 pb-0">
              <div class="media pr-4">
                <div class="media-content">
                  <p class="side-list_card-content--title title is-6">
                    {{ post.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <post-info
            :createdDate="post.createdDate"
            :readNum="post.readNum"
            :commentNum="post.commentNum"
            class="pr-4 pl-2"
          />
        </div>
      </router-link>
    </div>
    <div v-else class="columns is-centered">
      <font-awesome-icon icon="circle-notch" class="fa-spin" size="5x" />
    </div>
  </div>
</template>

<script>
import PostInfo from "@/views/components/PostInfo.vue";
export default {
  name: "sideList",
  components: {
    PostInfo,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    isLoaded: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    directDetail() {
      this.$emit("directDetail");
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/sideList.scss"></style>
