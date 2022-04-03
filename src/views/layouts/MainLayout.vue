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
    <Footer />
  </body>
</template>

<script>
import Top from "@/views/components/Top.vue";
import Hero from "@/views/components/Hero.vue";
import Footer from "@/views/components/Footer.vue";
import { mapState } from "vuex"

export default {
  name: "MainLayout",
  data() {
    return {
    };
  },
  components: {
    Top,
    Hero,
    Footer
  },
  computed: {
    ...mapState(["breadcrumbs"])
  },
};
</script>

<style scoped>
</style>