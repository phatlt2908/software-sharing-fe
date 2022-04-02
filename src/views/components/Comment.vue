<template>
  <div id="comment">
    <article
      class="media comment-input"
      :class="{ 'sticky-comment': commentReplying || commentEditting }"
    >
      <figure class="media-left has-text-centered">
        <p class="image is-64x64">
          <img :src="avatar" />
        </p>
        <a class="is-size-7 has-text-dark" @click="isSelectingAvatar = true">
          Đổi ảnh
        </a>
        <div v-if="isSelectingAvatar" class="modal is-active is-clipped">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Chọn avatar</p>
              <button
                @click="isSelectingAvatar = false"
                class="delete"
                aria-label="close"
              ></button>
            </header>
            <section class="modal-card-body">
              <figure
                v-for="avatar in avatarList"
                :key="avatar"
                @click="selectAvatar(avatar)"
                class="image avatar-select is-128x128"
              >
                <img :src="avatar" />
              </figure>
            </section>
          </div>
        </div>
      </figure>
      <div class="media-content">
        <div class="mb-2" v-if="commentReplying">
          <span>
            Đang trả lời&nbsp;<strong>{{ commentReplying.username }}</strong>
          </span>
          <span class="ml-2">·</span>
          <button
            class="button is-text is-small is-so-small"
            @click="cancelReply"
          >
            <span class="is-small"><font-awesome-icon icon="times" /> </span>
            <span class="ml-1">Hủy</span>
          </button>
        </div>
        <div class="mb-2" v-if="commentEditting">
          <span> Đang chỉnh sửa bình luận... </span>
          <span class="ml-2">·</span>
          <button
            class="button is-text is-small is-so-small"
            @click="cancelEdit"
          >
            <span class="is-small"><font-awesome-icon icon="times" /> </span>
            <span class="ml-1">Hủy</span>
          </button>
        </div>
        <div class="field">
          <p class="control">
            <textarea
              v-model="comment"
              class="textarea"
              :class="{ 'is-danger': !isValidComment }"
              placeholder="Bình luận..."
              ref="commentInput"
            ></textarea>
          </p>
        </div>
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <div class="control has-icons-left has-icons-right">
                <input
                  v-model="username"
                  class="input is-small"
                  :class="{ 'is-danger': !isValidUserName }"
                  @change="checkValidUserName"
                  type="text"
                  placeholder="Tên"
                />
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="user" />
                </span>
              </div>
              <div class="control has-icons-left has-icons-right ml-2">
                <input
                  v-model="email"
                  class="input is-small"
                  :class="{ 'is-danger': !isValidEmail }"
                  @change="checkValidEmail"
                  type="email"
                  placeholder="Email"
                />
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="envelope" />
                </span>
              </div>
            </div>
          </div>
          <div v-if="this.commentEditting" class="level-right">
            <div class="level-item">
              <button
                @click="edit"
                class="button is-primary"
                :class="{ 'is-loading': isSubmitting }"
              >
                <span class="icon is-medium">
                  <font-awesome-icon icon="pen" />
                </span>
                <span>Chỉnh sửa</span>
              </button>
            </div>
          </div>
          <div v-else class="level-right">
            <div class="level-item">
              <button
                @click="submit"
                class="button is-primary"
                :class="{ 'is-loading': isSubmitting }"
              >
                <span class="icon is-medium">
                  <font-awesome-icon icon="comment" />
                </span>
                <span>Gửi bình luận</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </article>
    <template v-if="commentList && commentList.length">
      <transition-group name="slide-fade">
        <article v-for="comment in commentList" :key="comment.id" class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="comment.avatar" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <div
                class="content-gray-backgroud"
                :class="{ 'content-replying-backgroud': comment.isFocusing }"
              >
                <strong>{{ comment.username }}</strong>
                <span v-if="comment.isAdmin" class="ml-1 has-text-success">
                  <font-awesome-icon icon="check-circle" />
                </span>
                <em v-if="!comment.isApproved" class="has-text-danger ml-2">
                  <font-awesome-icon icon="exclamation-circle" />
                  Chưa được phê duyệt
                </em>
                <br />
                {{ comment.content }}
              </div>
            </div>
            <nav class="level is-mobile">
              <div class="level-left is-size-7 disable-select">
                <a
                  class="level-item"
                  :class="
                    comment.isLiked
                      ? 'has-text-primary has-text-weight-bold'
                      : 'has-text-grey-dark'
                  "
                  @click="like(comment)"
                >
                  <span class="icon is-small"
                    ><font-awesome-icon icon="thumbs-up"
                  /></span>
                  <span class="ml-1">Thích</span>
                  <span
                    v-if="comment.likeNum && comment.likeNum > 0"
                    class="tag is-so-small is-primary p-1 ml-1"
                  >
                    {{ comment.likeNum }}
                  </span>
                </a>
                <span class="level-item">·</span>
                <a
                  class="level-item has-text-grey-dark"
                  @click="focusReply(comment)"
                >
                  <span class="icon is-small">
                    <font-awesome-icon icon="reply" />
                  </span>
                  <span class="ml-1">Phản hồi</span>
                </a>
                <span class="level-item">·</span>
                <span class="level-item">{{
                  displayTime(comment.createdDate)
                }}</span>
              </div>
            </nav>
            <!-- Display reply -->
            <div v-if="Number(comment.childCount)">
              <div v-if="comment.showReply">
                <transition-group name="slide-fade">
                  <article
                    v-for="childComment in comment.commentList"
                    :key="childComment.id"
                    class="media"
                  >
                    <figure class="media-left">
                      <p class="image is-48x48">
                        <img :src="childComment.avatar" />
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <div
                          class="content-gray-backgroud"
                          :class="{
                            'content-replying-backgroud':
                              childComment.isFocusing,
                          }"
                        >
                          <strong>{{ childComment.username }}</strong>
                          <span
                            v-if="childComment.isAdmin"
                            class="ml-1 has-text-success"
                          >
                            <font-awesome-icon icon="check-circle" />
                          </span>
                          <em
                            v-if="!childComment.isApproved"
                            class="has-text-danger ml-2"
                          >
                            <font-awesome-icon icon="exclamation-circle" />
                            Chưa được phê duyệt
                          </em>
                          <br />
                          {{ childComment.content }}
                        </div>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left is-size-7 disable-select">
                          <a
                            class="level-item"
                            :class="
                              childComment.isLiked
                                ? 'has-text-primary has-text-weight-bold'
                                : 'has-text-grey-dark'
                            "
                            @click="like(childComment)"
                          >
                            <span class="icon is-small"
                              ><font-awesome-icon icon="thumbs-up"
                            /></span>
                            <span class="ml-1">Thích</span>
                            <span
                              v-if="
                                childComment.likeNum && childComment.likeNum > 0
                              "
                              class="tag is-so-small is-primary p-1 ml-1"
                            >
                              {{ childComment.likeNum }}
                            </span>
                          </a>
                          <span class="level-item">·</span>
                          <a
                            class="level-item has-text-grey-dark"
                            @click="focusReply(comment)"
                          >
                            <span class="icon is-small">
                              <font-awesome-icon icon="reply" />
                            </span>
                            <span class="ml-1">Phản hồi</span>
                          </a>
                          <span class="level-item">·</span>
                          <span class="level-item">{{
                            displayTime(childComment.createdDate)
                          }}</span>
                        </div>
                      </nav>
                    </div>
                    <div v-if="childComment.canEdit" class="media-right">
                      <button
                        class="button is-text is-small is-so-small"
                        @click="focusEdit(childComment)"
                      >
                        <span class="is-small"
                          ><font-awesome-icon icon="pen" />
                        </span>
                        <span class="ml-1">Sửa</span>
                      </button>
                      <button
                        class="button is-text is-small is-so-small"
                        @click="
                          deleteComment(childComment, comment.commentList)
                        "
                      >
                        <span class="is-small"
                          ><font-awesome-icon icon="times" />
                        </span>
                        <span class="ml-1">Xóa</span>
                      </button>
                    </div>
                  </article>
                </transition-group>
              </div>
              <article v-else class="media">
                <a
                  class="has-text-grey-dark is-size-7"
                  @click="loadComment(comment)"
                >
                  {{ comment.childCount }} Phản hồi
                </a>
              </article>
            </div>
          </div>
          <div v-if="comment.canEdit" class="media-right">
            <button
              class="button is-text is-small is-so-small"
              @click="focusEdit(comment)"
            >
              <span class="is-small"><font-awesome-icon icon="pen" /> </span>
              <span class="ml-1">Sửa</span>
            </button>
            <button
              class="button is-text is-small is-so-small"
              @click="deleteComment(comment, commentList)"
            >
              <span class="is-small"><font-awesome-icon icon="times" /> </span>
              <span class="ml-1">Xóa</span>
            </button>
          </div>
        </article>
      </transition-group>
    </template>
    <article v-else class="media">
      <em>Chưa có bình luận nào...</em>
    </article>
  </div>
</template>

<script>
import postAPI from "@/services/postAPI";
import regexConst from "@/constants/regexConst";
import avatarConst from "@/constants/avatarConst";
import { mapState } from "vuex";
export default {
  name: "comment",
  data() {
    return {
      comment: null,
      isValidComment: true,
      username: null,
      avatar: null,
      isValidUserName: true,
      email: null,
      isValidEmail: true,
      parentId: null,
      isSubmitting: false,
      commentList: [],
      commentReplying: null,
      commentEditting: null,
      isSelectingAvatar: false,
      avatarList: avatarConst.AVATAR_LIST,
    };
  },
  props: {
    postCode: null,
  },
  computed: {
    ...mapState(["commentUser"]),
  },
  created() {
    this.username = this.commentUser.username;
    this.email = this.commentUser.email;
    this.avatar = this.commentUser.avatar ? this.commentUser.avatar : avatarConst.DEFAULT;
  },
  mounted() {
    this.loadComment(null);
  },
  methods: {
    loadComment(parent) {
      let parentId = parent ? parent.id : null;
      if (this.postCode) {
        postAPI
          .loadComment(this.postCode, parentId, this.email)
          .then((res) => {
            if (parentId) {
              parent.childCount++;
              parent["showReply"] = true;
              parent["commentList"] = res.data;
              this.cancelReply();
            } else {
              this.commentList = res.data;
            }
          })
          .catch((err) => {
            console.error("Load comment failed ", err);
          });
      }
    },
    submit() {
      this.checkValidUserName();
      this.checkValidEmail();
      this.checkValidComment();
      if (this.isValidUserName && this.isValidEmail && this.isValidComment) {
        this.isSubmitting = true;
        let data = {
          postCode: this.postCode,
          comment: this.comment,
          username: this.username,
          email: this.email,
          parentId: this.commentReplying
            ? this.commentReplying.parentId
              ? this.commentReplying.parentId
              : this.commentReplying.id
            : null,
          avatar: this.avatar
        };
        postAPI
          .submitComment(data)
          .then(() => {
            this.comment = null;
            this.isSubmitting = false;
            this.loadComment(this.commentReplying);
          })
          .catch((err) => {
            console.error("Submit comment failed ", err);
          });
      }
    },
    edit() {
      this.checkValidUserName();
      this.checkValidEmail();
      this.checkValidComment();
      if (this.isValidUserName && this.isValidEmail && this.isValidComment) {
        this.isSubmitting = true;
        let data = {
          id: this.commentEditting.id,
          comment: this.comment,
          email: this.email,
        };
        postAPI
          .updateComment(data)
          .then(() => {
            this.commentEditting.content = this.comment;
            this.commentEditting.isApproved = false;
            this.comment = null;
            this.isSubmitting = false;
            this.cancelEdit();
          })
          .catch((err) => {
            console.error("Submit comment failed ", err);
          });
      }
    },
    checkValidComment() {
      this.isValidComment = !!this.comment;
    },
    checkValidUserName() {
      this.isValidUserName = !!this.username;
      if (this.isValidUserName) {
        this.$store.dispatch("changeUser", {
          username: this.username,
          email: this.email,
          avatar: this.avatar,
        });
      }
    },
    checkValidEmail() {
      this.isValidEmail = String(this.email)
        .toLowerCase()
        .match(regexConst.EMAIL);
      if (this.isValidEmail) {
        this.$store.dispatch("changeUser", {
          username: this.username,
          email: this.email,
          avatar: this.avatar,
        });
      }
    },
    like(comment) {
      comment.isLiked = !comment.isLiked;
      comment.isLiked ? comment.likeNum++ : comment.likeNum--;
      postAPI
        .updateCommentLike(comment.id, comment.isLiked)
        .then(() => {})
        .catch((err) => {
          console.error("Update comment like failed ", err);
        });
    },
    focusReply(comment) {
      this.cancelReply();
      this.cancelEdit(); // Reset
      this.commentReplying = comment;
      this.$refs.commentInput.focus({
        preventScroll: true,
      });
      this.commentReplying.isFocusing = true;
    },
    focusEdit(comment) {
      this.cancelEdit();
      this.cancelReply(); //Reset
      this.commentEditting = comment;
      this.comment = this.commentEditting.content;
      this.$refs.commentInput.focus({
        preventScroll: true,
      });
      this.commentEditting.isFocusing = true;
    },
    cancelReply() {
      if (this.commentReplying) {
        this.commentReplying.isFocusing = false; // Reset
        this.commentReplying = null;
      }
    },
    cancelEdit() {
      if (this.commentEditting) {
        this.commentEditting.isFocusing = false; // Reset
        this.commentEditting = null;
      }
    },
    displayTime(time) {
      let afterMilisecond = new Date() - new Date(time);
      if (afterMilisecond < 3600000) {
        // after < 1h
        return Math.floor(afterMilisecond / 60000) + " phút";
      } else if (afterMilisecond < 86400000) {
        // after < 1d
        return Math.floor(afterMilisecond / 3600000) + " giờ";
      } else if (afterMilisecond < 2592000000) {
        // after < 1M
        return Math.floor(afterMilisecond / 86400000) == 1
          ? "Hôm qua"
          : Math.floor(afterMilisecond / 86400000) + " ngày";
      } else {
        return (
          new Date(time).getMonth() + 1 + "/" + new Date(time).getFullYear()
        );
      }
    },
    deleteComment(comment, commentList) {
      postAPI
        .deleteComment(comment.id, this.email)
        .then(() => {
          const index = commentList.indexOf(comment);
          if (index > -1) {
            commentList.splice(index, 1);
          }
          this.$swal({
            icon: "success",
            title: "Xóa thành công",
            toast: true,
            timer: 3000,
            position: "bottom-end",
            showConfirmButton: false,
            type: "success",
          });
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: "Không thể xóa bình luận này!",
            toast: true,
            timer: 3000,
            position: "bottom-end",
            showConfirmButton: false,
            type: "success",
          });
          console.error("Delete comment failed: ", err);
        });
    },
    selectAvatar(url) {
      this.avatar = url;
      this.$store.dispatch("changeUser", {
        username: this.username,
        email: this.email,
        avatar: this.avatar,
      });
      this.isSelectingAvatar = false
    },
  },
  watch: {
    postCode() {
      this.loadComment(null);
    }
  }
};
</script>

<style lang="scss" src="@/assets/scss/comment.scss"></style>
