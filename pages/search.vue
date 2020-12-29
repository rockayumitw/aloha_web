<template>
  <div class="search-page">
    <section class="pt-xxs-6 pb-xxs-6">
      <b-container>
        <b-row>
          <b-col lg="4" class="d-none d-lg-block">
            <div class="d-none d-sm-flex pb-xxs-6">
              <h3>Bangkok</h3>
              <small class="text-primary">3,240</small>
            </div>
            <filter-area />
          </b-col>
          <b-col sm="12" lg="8">
            <div class="d-none d-lg-block"><sort /></div>
            <div class="d-flex d-sm-none justify-content-center">
              <h3 class="h3">Bangkok</h3>
              <small class="text-primary">3,240</small>
            </div>
            <div
              class="pt-4 pb-4 d-flex d-lg-none justify-content-around align-items-center position-relative"
            >
              <b-button v-b-modal.modal-filter class="text-uppercase">
                <span class="material-icons"> filter_list </span>
                filter
              </b-button>
              <b-button class="text-uppercase" @click="isSort = !isSort">
                <span class="material-icons"> sort </span>
                sort
                <div
                  v-if="isSort == true"
                  class="position-absolute index-sort text-left bg-secondary rounded p-3"
                >
                  <sort />
                </div>
              </b-button>
            </div>
            <ul class="pb-xxs-3 pb-sm-6 pb-lg-9">
              <li
                class="search-item list-unstyled"
                v-for="item in searchResult"
                :key="item.index"
              >
                <a href="/search-result-info">
                  <div class="card">
                    <b-row no-gutters>
                      <b-col cols="5" sm="4">
                        <div class="card-image-box border-half-radius">
                          <img :src="item.image" alt="" />
                        </div>
                      </b-col>
                      <b-col cols="7" sm="8">
                        <b-row
                          no-gutters
                          class="pt-xxs-0 pr-xxs-0 pl-xxs-1 pt-xs-1 pt-sm-1 pl-sm-2 pb-lg-2"
                        >
                          <b-col cols="12" sm="6">
                            <span class="text-xxs-xxs text-primary">{{ item.city }}</span>
                            <span class="text-xxs-xxs text-gray-300 d-none d-lg-inline"
                              >・{{ item.distance }} from center</span
                            >
                            <div
                              class="text-xxs-sm text-md-sm text-lg-lg font-weight-bold text-gray-400"
                            >
                              {{ item.name }}
                            </div>
                          </b-col>
                          <b-col
                            cols="12"
                            sm="6"
                            class="search-item-rating text-sm-left text-md-right d-flex"
                          >
                            <span
                              class="material-icons lh-xxs-xs"
                              v-for="item in item.score"
                              :key="item.index"
                              >grade</span
                            >
                            <span
                              class="text-xxs-xs text-gray-300 lh-xxs-xs d-sm-inline d-md-block d-lg-inline"
                              >{{ item.score }} ({{ item.comment }})</span
                            >
                          </b-col>
                        </b-row>
                        <b-row class="pt-xxs-0 pl-xxs-1 pt-xs-0 pt-sm-2 pr-lg-3 pl-lg-3">
                          <b-col sm="12" md="7">
                            <span
                              class="text-xxs-xs text-gray-300 font-weight-bold d-block"
                              >{{ item.room_classis }}</span
                            >
                            <small
                              class="text-gray-300 pb-xxs-0 pb-sm-2 pb-lg-3 text-xxs-xxs d-block"
                              >{{ item.people }} guests・{{ item.bed }} bed (Queen
                              size)</small
                            >
                            <b-badge
                              pill
                              variant=""
                              class="text-gray-300 bg-secondary d-none d-md-inline"
                              v-for="tag in item.tags"
                              :key="tag.index"
                              >{{ tag.name }}</b-badge
                            >
                          </b-col>
                          <b-col sm="12" md="5" class="text-right search-item-price">
                            <small class="text-gray-300 d-none d-md-block">{{
                              item.night
                            }}</small>
                            <del
                              v-if="item.sale_price != null"
                              class="text-lg-sm text-sm-xs text-xxs-xxs text-gray-300"
                              >TWD {{ item.sale_price }}</del
                            >
                            <div
                              class="text-xxs-sm text-md-lg font-weight-bold text-gray-400"
                            >
                              TWD {{ item.special_price }}
                            </div>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </div>
                </a>
              </li>
            </ul>
            <pagination class="" />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <subscribe />

    <b-modal id="modal-filter" title="BootstrapVue">
      <template #modal-title>
        <span class="material-icons"> filter_list </span>
        filter
      </template>
      <filter-area />
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import subscribe from "~/components/subscribe";
import pagination from "@/components/pagination";
import filterArea from "@/components/Filter";
import Sort from "@/components/Sort";
export default {
  layout: "search-page",
  head: {},
  components: {
    filterArea,
    Sort,
    pagination,
    subscribe,
  },
  data() {
    return {
      isSort: false,
    };
  },
  computed: {
    ...mapGetters({
      searchResult: "slider/searchResult",
    }),
  },
  methods: {},
};
</script>
