<template>
  <body>
    <Top />
    <Hero />
    <section class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li
              v-for="(breadcrumb, index) in breadcrumbs"
              :key="breadcrumb"
              :class="{ 'is-active': index === breadcrumbs.length - 1 }"
            >
              <router-link :to="{ path: breadcrumb.path }">{{
                breadcrumb.name
              }}</router-link>
            </li>
          </ul>
        </nav>
        <router-view></router-view>
      </div>
    </section>
  </body>
</template>

<script>
import Top from "@/views/components/Top.vue";
import Hero from "@/views/components/Hero.vue";

export default {
  name: "MainLayout",
  data() {
    return {
      image: "https://i.imgur.com/9RHhWEo.jpeg",
    };
  },
  components: {
    Top,
    Hero
  },
  computed: {
    breadcrumbs: function () {
      return this.$route.meta.breadcrumb;
    },
  },
};
</script>

<style scoped>
</style>