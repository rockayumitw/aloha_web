<template>
  <section class="">
    <b-container>
      <b-row class="mb-xxs-1">
        <b-col md="6" lg="8" order="2" order-md="1">
          <h3 class="h3 pr-xxs-6 mb-xxs-6">My Bookings</h3>
          <b-tabs content-class="mt-3">
            <b-tab active>
              <template #title>
                <div class="d-flex text-xxs-md text-md-lg font-weight-bold">Upcoming</div>
              </template>
              <div>
                <b-row
                  no-gutters
                  class="card md-xxs-3 mt-xxs-3 md-lg-6 mt-lg-6 card-bg-secondary-xs align-items-start"
                >
                  <b-col
                    cols="12"
                    sm="4"
                    md="4"
                    class="d-flex align-items-center bg-white"
                  >
                    <div class="">
                      <div class="card-image-box border-half-radius">
                        <img src="/images/image3.jpg" alt="" />
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="12" sm="5" md="5">
                    <ul class="pt-xxs-3 pr-xxs-3 pl-xxs-3">
                      <li class="d-flex mb-xxs-1 w-100">
                        <span class="material-icons mr-xxs-3"> person </span>
                        <div>
                          <h6 class="h6">Rachada Hotel</h6>
                          <small class="text-gray-300">Deluxe Suite with Pool</small>
                        </div>
                      </li>
                      <li class="d-flex mb-xxs-1 w-100">
                        <span class="material-icons mr-xxs-3"> person </span>
                        <div>
                          <h6 class="h6">Rachada Hotel</h6>
                          <small class="text-gray-300">Deluxe Suite with Pool</small>
                        </div>
                      </li>
                      <li class="d-flex mb-xxs-1 w-100">
                        <span class="material-icons mr-xxs-3"> person </span>
                        <div>
                          <h6 class="h6">Rachada Hotel</h6>
                          <small class="text-gray-300">Deluxe Suite with Pool</small>
                        </div>
                      </li>
                    </ul>
                  </b-col>
                  <b-col
                    cols="12"
                    sm="3"
                    md="3"
                    order="1"
                    order-lg="2"
                    class="p-xxs-3 pt-xxs-0"
                  >
                    <a href="javascript:void(0)" class="font-weight text-primary"
                      >VIEW DETAILS</a
                    >
                  </b-col>
                </b-row>
              </div>
            </b-tab>
            <b-tab disabled>
              <template #title>
                <div class="d-flex text-xxs-md text-md-lg font-weight-bold">
                  Completed
                </div>
              </template>
              <p>I'm the second tab</p>
            </b-tab>
          </b-tabs>
        </b-col>
        <b-col md="6" lg="4" order="1" order-md="2" class="">
          <div class="d-flex align-items-center justify-content-between mb-xxs-6">
            <div class="d-flex align-items-center">
              <h3 class="h3 mr-xxs-1">Profile</h3>
              <b-badge
                pill
                variant=""
                class="text-white bg-primary d-flex align-items-center"
              >
                <span class="material-icons"> done </span>
                <span>VERIFIED</span>
              </b-badge>
            </div>
            <a href="javascript:void(0)" class="text-primary">EDIT</a>
          </div>
          <div class="bg-secondary p-xxs-6 rounded mx-auto mb-xxs-9">
            <h6 class="h6 pb-xxs-2">User details</h6>
            <div class="d-flex justify-content-between">
              <ul class="text-gray-300">
                <li class="mb-xxs-1">David Lin</li>
                <li class="mb-xxs-1">david0520@mail.com.tw</li>
                <li class="mb-xxs-1">+886 9 32 456 789</li>
              </ul>
              <b-avatar
                src="https://placekitten.com/300/300"
                size="5rem"
                rounded="sm"
              ></b-avatar>
            </div>

            <hr class="border-white mt-xxs-6 mb-xxs-6" />
            <h6 class="h6 pb-xxs-2">Payment methods</h6>
            <div class="d-flex">
              <div class="bg-white mr-xxs-1 p-xxs-3 w-50">
                <ul>
                  <li class="text-gray-300">xxxx-xxxx-7890</li>
                  <li class="text-gray-300">DAVID LIN</li>
                  <li class="text-gray-300 d-flex justify-content-between">
                    <span>08/2029</span>
                    <span class="text-white bg-black rounded pr-xxs-1 pl-xxs-1"
                      >visa</span
                    >
                  </li>
                </ul>
              </div>
              <div
                class="bg-white d-flex justify-content-center align-items-center p-xxs-3 w-50"
              >
                <div class="rounded">
                  <span class="material-icons"> person </span>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style scoped lang="scss">
.card {
  flex-direction: inherit;
  align-items: center;
  .card-image-box {
    max-width: 255px;
    max-height: 175px;
  }
  ul {
    li {
      width: 50%;
    }
  }
}
</style>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  layout: "inner-page",
  computed: {
    ...mapGetters({
      searchResult: "slider/searchResult",
    }),
  },
};
</script>
