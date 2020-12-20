<template>
  <section class="login d-flex align-items-center">
    <div class="pic-login-bg d-none d-sm-block d-lg-block">
      <a class="d-block pl-xxs-13 pt-xxs-4 mb-xxs-15" href="/">
        <img width="128" src="../assets/images/ic-logo-aloha.svg" alt="" />
      </a>
      <div class="login-content pl-xxs-13 pt-xxs-6 d-none d-lg-block">
        <h2 class="h2 mb-xxs-3">An ideal hotel makes a wonderful Trip.</h2>
        <p class="text-gray-300">
          Discover your dream destination and hotel on ALOHA.com
        </p>
        <button type="" class="btn-xs btn-black mt-xxs-17 mb-xxs-6">
          Osaka Castel, Japan
        </button>
      </div>
      <LoginForm class="d-none d-sm-block d-lg-none mx-auto" />
    </div>
    <div class="login-area pl-xxs-7 pl-xxs-7 pb-xxs-7 pr-xxs-13 d-none d-lg-block">
      <LoginForm class="d-none d-lg-block" />
    </div>
    <div class="d-block d-sm-none w-100">
      <a class="d-block pl-xxs-2 pt-xxs-2 mb-xxs-8" href="/">
        <img width="128" src="../assets/images/ic-logo-aloha.svg" alt="" />
      </a>
      <LoginForm class="d-block d-sm-none" />
    </div>
  </section>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
  layout: "login-layout",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      status: false,
    };
  },
  components: {
    LoginForm,
  },
  meta: {
    parent: "member",
    level: 3,
    text: "我的訂單",
    href: "/member/orders",
    active: true,
  },
  methods: {
    register() {
      this.$router.push({ name: "member-center" });
    },
    submit() {},
    reset() {
      form.email = "";
      form.password = "";
    },
  },
};
</script>
