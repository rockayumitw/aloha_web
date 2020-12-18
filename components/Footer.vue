<template>
  <footer class="bg-white">
    <b-container class="d-flex justify-content-between align-items-center">
      <b-row no-gutters class="w-100">
        <b-col
          cols="12"
          sm="12"
          md="6"
          lg="4"
          class="text-center text-lg-left"
          order="1"
          order-sm="1"
          order-md="0"
        >
          <small class="text-gray-300">© 2020 ALOHA, Inc. All rights reserved.</small>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg="6" order="0" order-sm="0" order-md="1">
          <ul
            class="footer-menu d-flex align-items-center text-gray-300 text-xxs-xs text-md-center"
          >
            <li>
              <nuxt-link to="/">FAQs</nuxt-link>
            </li>
            <li><a href="javscript:void(0)">Terms of use</a></li>
            <li><a href="javscript:void(0)">Privacy policy</a></li>
          </ul>
        </b-col>
        <b-col lg="2" class="d-md-none d-lg-block" order-md="2">
          <ul class="d-flex justify-content-center">
            <li><language /></li>
            <li>
              <b-nav-item-dropdown text="" right class="list-unstyled d-none d-md-block">
                <template #button-content>
                  <span class="material-icons"> attach_money </span>
                </template>
                <b-dropdown-item href="#">TWD</b-dropdown-item>
              </b-nav-item-dropdown>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import GoTop from "~/components/GoTop.vue";
import language from "@/components/language";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    GoTop,
    language,
  },
};
</script>
