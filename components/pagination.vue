<template>
  <b-pagination
    hide-goto-end-buttons
    class="overflow-auto bg-secondary font-weight-bold"
    align="center"
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
  >
    <template #prev-text>
      <div class="btn-outline-primary rounded btn-xs d-none d-lg-block">PREVIOUS</div>
      <div class="btn-outline-primary rounded btn-xs d-block d-lg-none">
        <span class="material-icons"> keyboard_arrow_left </span>
      </div>
    </template>
    <template #next-text>
      <div class="btn-primary rounded btn-xs d-none d-lg-block">NEXT</div>
      <div class="btn-primary rounded btn-xs d-block d-lg-none">
        <span class="material-icons"> keyboard_arrow_right </span>
      </div>
    </template>
  </b-pagination>
</template>

<script>
export default {
  data() {
    return {
      rows: 100,
      perPage: 10,
      currentPage: 1,
    };
  },
};
</script>
