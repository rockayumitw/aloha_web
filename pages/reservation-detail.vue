<template>
  <div>
    <section>
      <b-container>
        <b-row>
          <b-col>
            <h3 class="h3">Reservation details</h3>
            <b-form inline class="form">
              <b-input-group class="mr-0 mr-lg-3 mb-3 mb-lg-0" size="lg">
                <label for="text-password">Password</label>
                <b-form-input
                  placeholder="user-name"
                  class="border border-gray-200"
                ></b-form-input>
              </b-input-group>
              <b-button variant="primary" class="btn-md font-weight" @click="search"
                >SEARCH</b-button
              >
            </b-form>
          </b-col>
          <b-col> detail </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: "inner-page",
  data() {
    return {};
  },
};
</script>
