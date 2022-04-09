<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
    </metainfo>
    <router-view/>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta';
  export default {
    name: 'App',
    setup () {
      useMeta({
        htmlAttrs: { lang: 'en', amp: true },
        charset: "UTF-8",
        description: "Đây nè! Nơi chia sẻ phần mềm, ứng dụng, games... Hoàn toàn miễn phí. Không dẫn đến các link rác, không phải làm các bước phức tạp để tìm mật khẩu file nén",
        // keywords: "Đây nè, Phần mềm, Tải game offline, Phần mềm miễn phí, word, tải office",
      })
    }
  }
</script>

<style>
</style>