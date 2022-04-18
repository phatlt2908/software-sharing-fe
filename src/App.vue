<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{
        content ? `${content} | SITE_NAME` : `SITE_NAME`
      }}</template>
    </metainfo>
    <router-view />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
export default {
  name: "App",
  setup() {
    useMeta({
      htmlAttrs: { lang: "vi" },
      charset: "UTF-8",
      description:
        "Đây nè! Chia sẻ phần mềm, ứng dụng, games... miễn phí. Không link rác, không phải làm các bước phức tạp để tìm mật khẩu file nén",
      keywords: "dayne.run, Đây nè, Phần mềm, Tải game offline, Phần mềm miễn phí, word, tải office",
    });
  },
};
</script>

<style>
</style>