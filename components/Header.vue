<template>
  <header class="fixed-top bg-white" :class="{ unpinned: scrolled, sticky: isActive }">
    <b-container>
      <b-navbar toggleable="lg" type="dark" variant="" class="row no-gutters">
        <b-col cols="4" sm="4" class="d-block d-md-none">
          <b-navbar-toggle target="nav-collapse" class="hamburger __rotate-x">
            <i></i>
            <i></i>
            <i></i>
          </b-navbar-toggle>
        </b-col>
        <b-col cols="4" sm="4" md="8" lg="8" class="text-center text-md-left">
          <b-navbar-brand href="/" class="mr-0">
            <img src="../assets/images/ic-logo-aloha.svg" alt="" />
          </b-navbar-brand>
        </b-col>
        <b-col cols="4" sm="4" md="4" lg="4">
          <!--language-->
          <b-navbar-nav>
            <language />
            <b-nav-item href="#" class="d-none d-md-block"> Sign up </b-nav-item>
            <b-nav-item href="/Login" class=""> Login </b-nav-item>
            <b-nav-item-dropdown text="" right class="list-unstyled d-none">
              <template #button-content>
                <b-avatar
                  class="border-primary border-width mr-1"
                  size="1.75rem"
                  src="https://placekitten.com/300/300"
                ></b-avatar>
                <span>name</span>
              </template>
              <b-dropdown-item href="#">會員中心</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-col>
      </b-navbar>
    </b-container>
    <section class="">
      <search-form-inner-page v-if="route == true" />
    </section>
  </header>
</template>

<script>
import { stickyMixins } from "../mixins/sticky.js";
import language from "@/components/language";
// import searchForm from "@/components/SearchIndex";
import searchFormInnerPage from "@/components/SearchInnerPage";
export default {
  mixins: [stickyMixins],
  data() {
    return {};
  },
  computed: {
    route() {
      if (this.$router.history.current.name == "search") {
        return true;
      }
    },
  },
  mounted() {},
  methods: {},
  components: {
    searchFormInnerPage,
    // ProductsMenu,
    language,
  },
};
</script>
