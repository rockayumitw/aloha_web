<template>
  <main class="" data-offset="0">
    <section class="carousel position-relative">
      <carousel :sliders="sliders" />
    </section>
    <section>
      <b-container>
        <b-form inline class="form-lg justify-content-center bg-secondary mx-auto">
          <b-input-group class="mr-0 mr-lg-3 mb-3 mb-lg-0 position-relative" size="lg">
            <template #prepend>
              <b-input-group-text>
                <span class="material-icons"> room </span>
              </b-input-group-text>
            </template>
            <input
              type="button"
              @click="active = !active"
              class="form-control input-button border-right-radius"
              value="Destination"
            />
            <ul
              class="dropdown-menu bg-white p-xxs-3 w-100 dropdown-index rounded"
              :class="active ? 'active' : ''"
            >
              <li class="d-flex">
                <span class="material-icons mr-xxs-1"> star </span>
                <div>
                  <span class="text-xxs-sm d-block">Bangkok</span>
                  <span class="text-xxs-xxs text-gray-300">Thailand</span>
                </div>
              </li>
              <li class="d-flex">
                <span class="material-icons mr-xxs-1"> star </span>
                <div>
                  <span class="text-xxs-sm d-block">Osaka</span>
                  <span class="text-xxs-xxs text-gray-300">Japan</span>
                </div>
              </li>
            </ul>
          </b-input-group>
          <b-input-group class="mr-0 mr-lg-3 mb-3 mb-lg-0" size="lg">
            <template #prepend>
              <b-input-group-text>
                <span class="material-icons"> date_range </span>
              </b-input-group-text>
            </template>
            <date-picker
              class="form-control p-0"
              v-model="rangDate"
              :default-value="new Date()"
              type="date"
              range
              placeholder="Check-in / Check-out"
            ></date-picker>
          </b-input-group>
          <!---dropdown-->
          <b-input-group class="mr-0 mr-lg-3 mb-3 mb-lg-0" size="lg">
            <template #prepend>
              <b-input-group-text>
                <span class="material-icons"> person </span>
              </b-input-group-text>
            </template>
            <input
              type="button"
              @click="active2 = !active2"
              class="form-control input-button border-right-radius"
              value="Guests"
            />
            <ul
              class="dropdown-menu bg-white p-xxs-3 w-100 dropdown-index rounded"
              :class="active2 ? 'active' : ''"
            >
              <li class="d-flex">
                <label for="Adult">Adult</label>
                <b-form-spinbutton
                  id="Adult"
                  v-model="value1"
                  min="1"
                  max="100"
                  class="border-0 bg-transparent w-100"
                ></b-form-spinbutton>
              </li>
              <li class="d-flex">
                <label for="Child">Child</label>
                <b-form-spinbutton
                  id="Child"
                  v-model="value2"
                  min="1"
                  max="100"
                  class="border-0 bg-transparent w-100"
                ></b-form-spinbutton>
              </li>
              <li class="d-flex">
                <label for="Room">Room</label>
                <b-form-spinbutton
                  id="Room"
                  v-model="value3"
                  min="1"
                  max="100"
                  class="border-0 bg-transparent w-100"
                ></b-form-spinbutton>
              </li>
            </ul>
          </b-input-group>
          <!--dropdown-->
          <b-button variant="primary" class="btn-md font-weight" @click="search"
            >SEARCH</b-button
          >
        </b-form>
      </b-container>
    </section>
    <!--tabs-->
    <section class="mb-xxs-9 mb-md-12">
      <b-container>
        <h3 class="h3 text-gray-400 mb-xxs-6">Top Choices</h3>
        <b-tabs content-class="mt-3">
          <b-tab active>
            <template #title>
              <div class="d-flex text-xxs-md text-md-lg font-weight-bold">
                Bali<small>28</small>
              </div>
            </template>
            <div v-swiper:mySwiper="tabsSwiperOption" class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in balis" :key="item.index">
                  <a href="/">
                    <b-card>
                      <div class="card-image-box-md mb-xxs-1 rounded-lg">
                        <img :src="item.image" alt="" />
                      </div>
                      <b-card-text>
                        <h6 class="">{{ item.name }}</h6>
                        <div class="d-flex align-items-center">
                          <b-form-rating
                            inline
                            :value="item.score"
                            show-value
                            readonly
                          ></b-form-rating>
                          <small class="text-gray-200">・{{ item.reviews }} reviews</small
                          ><br />
                        </div>
                        <span class="text-gray-300 text-xxs-xs">{{
                          item.special_price
                        }}</span>
                        <del class="text-gray-200 text-xxs-xxs">{{
                          item.sale_price
                        }}</del>
                      </b-card-text>
                    </b-card>
                  </a>
                </div>
              </div>
              <div
                class="btn-secondary swiper-button swiper-button-prev"
                slot="button-prev"
              >
                <span class="material-icons"> chevron_left </span>
              </div>
              <div
                class="btn-secondary swiper-button swiper-button-next"
                slot="button-next"
              >
                <span class="material-icons"> chevron_right </span>
              </div>
            </div>
          </b-tab>
          <b-tab disabled>
            <template #title>
              <div class="d-flex text-xxs-md text-md-lg font-weight-bold">
                Okinawa<small>67</small>
              </div>
            </template>
            <p>I'm the second tab</p>
          </b-tab>
          <b-tab disabled>
            <template #title>
              <div class="d-flex text-xxs-md text-md-lg font-weight-bold">
                Taipei<small>53</small>
              </div>
            </template>
            <p>I'm a disabled tab!</p>
          </b-tab>
        </b-tabs>
      </b-container>
    </section>
    <!--popular-->
    <section class="mb-xxs-9 mb-md-12">
      <b-container>
        <h3 class="h3 text-gray-400 mb-xxs-6">Popular Destinations</h3>
        <ul class="row">
          <li
            class="col-12 col-sm-6 col-lg-4 col-md-4 mb-xxs-6"
            v-for="item in populars"
            :key="item.index"
          >
            <a href="/">
              <b-card class="card-mask">
                <div class="card-image-box mb-xxs-6 position-absolute">
                  <img :src="item.image" alt="" />
                </div>
                <b-card-text class="d-flex justify-content-between align-items-center">
                  <div>
                    <small class="text-gray-100">{{ item.location }}</small>
                    <h4 class="h4 text-white">{{ item.name }}</h4>
                  </div>
                  <span class="material-icons text-white"> expand_more </span>
                </b-card-text>
              </b-card>
            </a>
          </li>
        </ul>
      </b-container>
    </section>
    <!--Inspiration-->
    <section class="mb-xxs-9 mb-md-12">
      <b-container>
        <div class="d-flex justify-content-between align-items-center">
          <h3 class="h3 text-gray-400 mb-xxs-6">Get Inspiration</h3>
          <b-button variant="outline-primary" class="btn-xs">SEE MORE</b-button>
        </div>
        <ul class="row">
          <li class="col-sm-4 mb-4" v-for="item in Inspirations" :key="item.index">
            <a href="/">
              <b-card>
                <div class="card-image-box-lg mb-xxs-6 rounded-lg">
                  <img :src="item.image" alt="" />
                </div>
                <h4 class="h4 mb-xxs-1">{{ item.title }}</h4>
                <b-card-text class="text-xxs-sm lh-xxs-sm text-gray-300">
                  {{ item.content }}
                </b-card-text>
              </b-card>
            </a>
          </li>
        </ul>
      </b-container>
    </section>
    <subscribe />
  </main>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { BIcon } from "bootstrap-vue";
import { mapState, mapGetters } from "vuex";
import carousel from "~/components/Carousel";
import subscribe from "~/components/Subscribe";
import DatePicker from "vue2-datepicker";

export default {
  layout: "default",
  components: {
    carousel,
    subscribe,
    DatePicker,
  },
  data() {
    return {
      value1: 1,
      value2: 1,
      value3: 1,
      value: 5,
      active: false,
      active2: false,
      rangDate: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      tabsSwiperOption: {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      sliders: "slider/sliders",
      balis: "slider/balis",
      populars: "slider/populars",
      Inspirations: "slider/Inspirations",
    }),
  },
  created() {},
  mounted() {},
  methods: {
    search() {
      location.href = "/aloha_web/dist/search";
    },
  },
};
</script>
