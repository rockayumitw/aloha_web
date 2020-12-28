<template>
  <div>
    <section class="mb-xxs-6">
      <search-form />
    </section>
    <b-container>
      <carousel-info class="pb-xxs-3 pb-md-6" />
      <section class="pb-xxs-9 pb-lg-8">
        <div class="d-flex align-items-center">
          <h3 class="mr-xxs-2">Rachada Hotel</h3>
          <span class="material-icons lh-xxs-xs" v-for="item in 4" :key="item.index"
            >grade</span
          >
          <span class="text-xxs-xs text-gray-300 lh-xxs-xs">4 (480)</span>
        </div>
        <p class="text-primary pb-xxs-3 pb-md-6">
          318 Phaya Thai Road, Ratchathewi, Phaya Thai, 10400 Bangkok, Thailand
        </p>
        <p class="">
          The Rachada Hotel is an establishment that provides paid lodging on a short-term
          basis. Facilities provided may range from a modest-quality mattress in a small
          room to large suites with bigger, higher-quality beds, a dresser, a refrigerator
          and other kitchen facilities, upholstered chairs, a flat screen television, and
          en-suite bathrooms.
        </p>
      </section>

      <section class="mb-xxs-7 mb-lg-9">
        <h4 class="h4 mb-xxs-6">Select your room</h4>
        <div class="d-none d-sm-block">
          <b-badge variant="" class="text-gray-300 bg-secondary d-inline btn-xs"
            >test</b-badge
          >
          <a class="text-primary font-weight-bold" href="/">EDIT DETAIL</a>
        </div>
      </section>
      <section>
        <b-row
          no-gutters
          class="table-thead pb-xxs-1 font-weight-bold d-none d-md-flex border-bottom"
        >
          <b-col sm="6">ROOM TYPE</b-col>
          <b-col sm="2" class="d-none d-md-block text-center">SLEEP</b-col>
          <b-col sm="2" class="text-center">PRICE</b-col>
          <b-col sm="2" class="text-center">ROOMS</b-col>
        </b-row>
        <b-row
          no-gutters
          class="card md-xxs-3 mt-xxs-3 md-lg-6 mt-lg-6 card-bg-secondary"
          @click="isActive(true)"
        >
          <b-col md="6" class="d-flex align-items-center bg-white">
            <div class="mr-xxs-1 mr-lg-3">
              <div class="card-image-box border-half-radius border-single-radius">
                <img src="/images/image3.jpg" alt="" />
              </div>
            </div>
            <div>
              <h6 class="h6">Deluxe Double Room A</h6>
              <div class="mb-xxs-3 text-gray-300 text-xxs-xxs lh-xxs-xxs">
                1 bed (Queen size)
              </div>
              <ul class="d-flex flex-wrap">
                <li class="d-flex text-xxs-xs lh-xxs-xs text-gray-300 w-50">
                  <span class="material-icons mr-xxs-1"> wifi </span>
                  <span class="mr-xxs-4 mr-xxs-1 d-none d-lg-block">Wi-Fi</span>
                </li>
                <li class="d-flex text-xxs-xs lh-xxs-xs text-gray-300 w-50">
                  <span class="material-icons mr-xxs-1"> wifi </span>
                  <span class="mr-xxs-4 mr-xxs-1 d-none d-lg-block">Wi-Fi</span>
                </li>
                <li class="d-flex text-xxs-xs lh-xxs-xs text-gray-300 w-50">
                  <span class="material-icons mr-xxs-1"> wifi </span>
                  <span class="mr-xxs-4 mr-xxs-1 d-none d-lg-block">air conditioner</span>
                </li>
                <li class="d-flex text-xxs-xs lh-xxs-xs text-gray-300 w-50">
                  <span class="material-icons mr-xxs-1"> wifi </span>
                  <span class="mr-xxs-4 mr-xxs-1 d-none d-lg-block">air conditioner</span>
                </li>
              </ul>
              <div class="d-block d-md-none">
                <span class="material-icons"> person </span>
                <span class="material-icons"> person </span>
              </div>
            </div>
          </b-col>
          <b-col md="2" class="d-none d-md-block text-center">
            <div>
              <span class="material-icons"> person </span>
              <span class="material-icons"> person </span>
            </div>
          </b-col>
          <b-col cols="6" md="2" order="2" order-lg="1" class="text-right text-md-center">
            <div class="p-xxs-1 p-md-0">
              <del class="text-gray-200 text-xxs-xxs">TWD 1,490</del>
              <div class="text-xxs-sm text-gray-300 font-weight-bold">TWD 1,490</div>
              <small class="text-gray-300 d-none d-md-block text-xxs-xxs"
                >per night</small
              >
            </div>
          </b-col>
          <b-col cols="6" md="2" order="1" order-lg="2" class="">
            <b-form-spinbutton
              id="demo-sb"
              v-model="value"
              min="1"
              max="100"
              class="border-0 bg-transparent"
            ></b-form-spinbutton>
          </b-col>
        </b-row>
      </section>
    </b-container>
    <price-box :active="priceBox" />
  </div>
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
import searchForm from "@/components/SearchInnerPage";
import CarouselInfo from "@/components/Carousel-Info";
import PriceBox from "@/components/PriceBox";
export default {
  layout: "search-page",
  components: {
    searchForm,
    CarouselInfo,
    PriceBox,
  },
  data() {
    return {
      value: 0,
      roomData: [{}],
      counter: 0,
      priceBox: false,
    };
  },
  mounted() {
    console.log(this.priceBox);
    let _this = this;
    this.$nuxt.$on("priceBox", function (val) {
      _this.isActive(val);
    });
  },
  methods: {
    isActive(val) {
      this.priceBox = val;
    },
  },
};
</script>
