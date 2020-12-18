<template>
  <section class="">b-container {}</section>
</template>

<script>
export default {
  layout: "login-layout",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
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
