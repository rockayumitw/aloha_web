<template>
  <div
    class="price-box bg-mask rounded-top pr-xxs-13 pl-xxs-13 pt-xxs-5 pb-xxs-5 position-fixed w-100"
    :class="active ? 'active' : ''"
  >
    <b-container>
      <b-row class="justify-content-between align-items-center">
        <b-col>
          <small class="text-gray-100">1 room・2 night</small>
          <h4 class="h4 text-white">TWD 3,960</h4>
        </b-col>
        <b-col class="d-flex justify-content-end">
          <div class="d-flex w-75">
            <input
              type="button"
              class="text-white btn-outline-white btn-lg text-uppercase mr-xxs-1"
              value="Cancel"
              @click="$nuxt.$emit('priceBox', false)"
            />
            <input
              type="button"
              class="text-white btn-lg btn-primary text-uppercase"
              value="Reserve"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["active"],
  methods: {
    // isActive(val) {
    //   this.$nuxt.$emit("priceBox", val);
    // },
  },
};
</script>
