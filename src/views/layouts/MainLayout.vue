<template>
  <body>
    <Top />
    <Hero />
    <section class="section">
      <div class="container">
        <nav v-if="breadcrumbs && breadcrumbs.length" class="breadcrumb" aria-label="breadcrumbs">
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
      </div>
    </section>
    <router-view></router-view>
  </body>
</template>

<script>
import Top from "@/views/components/Top.vue";
import Hero from "@/views/components/Hero.vue";

export default {
  name: "MainLayout",
  data() {
    return {
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