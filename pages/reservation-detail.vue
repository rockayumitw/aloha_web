<template>
  <div>
    <section>
      <b-container>
        <b-row>
          <b-col cols="12" sm="10" md="10" lg="8" class="mx-auto">
            <b-row class="justify-content-center">
              <b-col cols="12" class="d-block d-sm-none">
                <div class="bg-secondary mb-xxs-6">
                  <div class="d-flex justify-content-between p-xxs-3 p-sm-6">
                    <div>
                      <span class="text-gray-300">Total</span>
                      <span class="text-black">TWD 4,633</span>
                    </div>
                    <a href="javascrip:void(0)" @click="active = !active">DETAIL</a>
                  </div>
                  <div
                    class="reservation-list position-relative w-100"
                    v-if="active == true"
                  >
                    <reservation-detail-list class="position-absolute w-100" />
                  </div>
                </div>
              </b-col>
              <b-col cols="12" sm="6" class="">
                <h3 class="h3 mb-xxs-6">Reservation details</h3>
                <b-form class="form-sm">
                  <b-form-group
                    id="name"
                    label="name"
                    label-for="name"
                    class="text-gray-300"
                  >
                    <b-form-input
                      id="name"
                      class="input-lg"
                      type="text"
                      placeholder="Enter name"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="email"
                    label="email"
                    label-for="email"
                    class="text-gray-300"
                  >
                    <b-form-input
                      id="email"
                      class="input-lg"
                      type="email"
                      placeholder="Enter email"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="phone"
                    label="Phone (optional)"
                    label-for="phone"
                    class="text-gray-300"
                  >
                    <b-form-input
                      id="phone"
                      class="input-lg"
                      type="tel"
                      placeholder="Enter phone"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-button
                    type="submit"
                    variant="primary"
                    class="btn-lg btn-primary mb-xxs-1"
                    >Reserve</b-button
                  >
                  <a href="/" class="text-center text-primary d-block mb-xxs-6">
                    Reserve now, pay at stay
                  </a>
                </b-form>
              </b-col>
              <b-col sm="6" class="d-none d-sm-block">
                <reservation-detail-list />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import ReservationDetailList from "@/components/ReservationDetailList.vue";
export default {
  layout: "reservation-page",
  data() {
    return {
      active: false,
    };
  },
  components: {
    ReservationDetailList,
  },
};
</script>
