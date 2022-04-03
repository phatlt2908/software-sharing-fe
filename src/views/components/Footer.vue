<template>
  <div id="footer">
    <div class="bd-newsletter">
      <section class="bd-index-section bd-newsletter-box">
        <div class="bd-newsletter-heading columns is-desktop">
          <div class="column">
            <span class="icon has-text-primary is-size-2-widescreen">
              <font-awesome-icon icon="paper-plane" />
            </span>

            <h2 class="title has-text-black mb-0 is-size-2-widescreen">
              <strong>Phản hồi</strong>
              <small class="mt-2">
                Rất mong nhận được những thắc mắc hoặc đóng góp ý kiến từ các
                bạn, để ĐâyNè.run ngày càng hoàn thiện hơn!
              </small>
            </h2>
          </div>

          <div class="column">
            <div class="field">
              <div class="control has-icons-left is-expanded">
                <input
                  type="email"
                  value=""
                  name="email"
                  class="input is-medium is-primary"
                  placeholder="email"
                />
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="envelope" />
                </span>
              </div>
              <p class="help">Không bắt buộc</p>
            </div>

            <div class="field">
              <div class="control">
                <textarea
                  class="textarea is-medium is-primary"
                  placeholder="Nội dung phản hồi..."
                ></textarea>
              </div>
            </div>

            <div class="control">
              <button class="button is-medium is-primary">
                <span class="icon is-medium">
                  <font-awesome-icon icon="comment" />
                </span>
                <span><strong>Gửi phản hồi</strong></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="bd-footer">
      <div class="container">
        <div class="bd-footer-links">
          <div class="columns is-desktop">
            <div class="column">
              <h4 class="bd-footer-title">
                <strong>DayNe.run</strong> bởi
                <a target="_blank" href="https://www.facebook.com/phatamao"
                  >PhátLT</a
                >
              </h4>
              <p class="bd-footer-tsp">
                Vì mục đích chia sẻ<br />và phi lợi nhuận
              </p>
            </div>
            <div class="column">
              <p class="bd-footer-link-title">
                <router-link :to="{ name: 'home', query: { page: 1 } }">
                  <span>Danh mục</span>
                </router-link>
              </p>
              <p class="bd-footer-link">
                <router-link :to="{ name: 'game', query: { page: 1 } }">
                  <span>Games</span>
                </router-link>
              </p>
              <p class="bd-footer-link">
                <router-link :to="{ name: 'office', query: { page: 1 } }">
                  <span>Văn phòng</span>
                </router-link>
              </p>
              <p class="bd-footer-link">
                <router-link :to="{ name: 'graphic', query: { page: 1 } }">
                  <span>Đồ họa</span>
                </router-link>
              </p>
              <p class="bd-footer-link">
                <router-link :to="{ name: 'technique', query: { page: 1 } }">
                  <span>Kỹ thuật</span>
                </router-link>
              </p>
              <p class="bd-footer-link">
                <router-link :to="{ name: 'os', query: { page: 1 } }">
                  <span>Hệ điều hành</span>
                </router-link>
              </p>
              <p class="bd-footer-link">
                <router-link :to="{ name: 'common', query: { page: 1 } }">
                  <span>Ai cũng cần</span>
                </router-link>
              </p>
            </div>
            <div class="column">
              <h4 class="bd-footer-title">
                <strong>Hỗ trợ</strong> DayNe.run 😃
              </h4>
              <p class="bd-footer-link bd-has-subtitle">
                <a target="_blank" href="https://me.momo.vn/vjIyuZsGU1UAFlfkIRsn">
                  <strong> Momo </strong>
                  <em> donate qua Momo </em>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "footer",
  computed: {
    ...mapState(["category"]),
  },
};
</script>

<style lang="scss" src="@/assets/scss/footer.scss"></style>
