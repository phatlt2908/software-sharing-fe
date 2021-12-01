<template>
  <div>
    <Top />
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="columns">
          <div class="column bd-index-content">
            <h1 class="title has-text-black">
              <strong>Ý! Đây nè!</strong> Nơi chia sẻ <strong>phần mềm</strong>,
              <strong>ứng dụng</strong>, <strong>games</strong>...<br />
              Hoàn toàn <strong>miễn phí</strong>
            </h1>
            <div class="content">
              <p>
                Ý! Đây nè! là miễn phí, <strong>không</strong> dẫn đến các link
                rác, <strong>không</strong> phải làm các bước phức tạp để tìm
                mật khẩu file nén
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
  </div>
</template>

<script>
import Top from "@/views/components/Top.vue";

export default {
  name: "Home",
  components: {
    Top,
  },
};
</script>

<style scoped>
.content p {
  font-size: 1.5em;
}
</style>
