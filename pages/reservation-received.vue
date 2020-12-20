<template>
  <div>
    <section>
      <b-container>
        <b-row>
          <b-col cols="12" sm="10" md="10" lg="8" class="mx-auto">
            <h3 class="h3 mb-xxs-6">Reservation received!</h3>
            <hr class="" />
            <b-row>
              <b-col cols="3">
                <span class="text-black font-weight-bold text-sm-sm text-xxs-xxs"
                  >Guest</span
                >
              </b-col>
              <b-col cols="9">
                <span class="text-gray-300 text-sm-sm text-xxs-xxs">David Lin</span>
              </b-col>
              <b-col cols="3">
                <span class="text-black font-weight-bold text-sm-sm text-xxs-xxs"
                  >Email</span
                >
              </b-col>
              <b-col cols="9">
                <span class="text-gray-300 text-sm-sm text-xxs-xxs"
                  >david0520@mail.com.tw</span
                ><br class="d-block d-lg-none" />
                <span class="text-primary text-xxs-xxs"
                  >Confirmation email sent to this address</span
                ></b-col
              >
              <b-col cols="12"><hr /></b-col>
              <b-col cols="3">
                <span class="text-black font-weight-bold text-sm-sm text-xxs-xxs"
                  >phone</span
                >
              </b-col>
              <b-col cols="9">
                <span class="text-gray-300 text-sm-sm text-xxs-xxs"
                  >+886 9 32 456 789</span
                ></b-col
              >
              <b-col cols="12"><hr /></b-col>
              <b-col cols="3">
                <span class="text-black font-weight-bold text-sm-sm text-xxs-xxs"
                  >check-in</span
                >
              </b-col>
              <b-col cols="9">
                <span class="text-gray-300 text-sm-sm text-xxs-xxs"
                  >Wednesday, 17 June 2020</span
                ></b-col
              >
              <b-col cols="3">
                <span class="text-black font-weight-bold text-sm-sm text-xxs-xxs"
                  >check-out</span
                >
              </b-col>
              <b-col cols="9">
                <span class="text-gray-300 text-sm-sm text-xxs-xxs"
                  >Friday, 19 June 2020</span
                ></b-col
              >
              <b-col cols="12"><hr /></b-col>
              <div class="reservation-received-buttons w-100 d-flex justify-content-end">
                <button
                  type=""
                  class="btn-outline-primary btn-md mb-xxs-1 mb-xs-0 mr-xxs-0 mr-xs-1"
                >
                  edit reservation
                </button>
                <button type="" class="btn-primary btn-md">Homepage</button>
              </div>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: "reservation-page",
  data() {
    return {
      active: false,
    };
  },
};
</script>
