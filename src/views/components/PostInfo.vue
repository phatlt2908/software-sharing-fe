<template>
  <div id="postInfo">
    <div class="read-comment">
      <font-awesome-icon icon="eye" />
      <span class="ml-1 mr-2 has-text-grey">{{ readNum }}</span>
      <font-awesome-icon icon="comments" />
      <span class="ml-1 has-text-grey">{{ commentNum }}</span>
    </div>
    <div class="time">
      <font-awesome-icon icon="clock" />
      <time class="ml-1 has-text-grey">{{
        "Tháng " + (new Date(createdDate).getMonth() + 1) + ", " + new Date(createdDate).getFullYear()
      }}</time>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post Info",
  props: {
    createdDate: null,
    readNum: {
      type: Number,
      default: 0
    },
    commentNum: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style lang="scss" src="@/assets/scss/postInfo.scss"></style>
