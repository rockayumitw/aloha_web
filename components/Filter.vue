<template>
  <div class="bg-secondary p-xxs-6">
    <h6 class="pb-xxs-3">Deals</h6>
    <b-form-checkbox
      v-for="item in Deals"
      :key="item.index"
      :id="`Del - ${item.value}`"
      :name="`Del - ${item.value}`"
      value="accepted"
      unchecked-value="not_accepted"
      class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
    >
      {{ item.description }}
    </b-form-checkbox>
    <hr class="border-white" />

    <h6 class="pb-xxs-3">Popular filter</h6>
    <b-form-checkbox
      v-for="item in Popular"
      :key="item.index"
      :id="`Popular - ${item.value}`"
      :name="`Popular - ${item.value}`"
      value="accepted"
      unchecked-value="not_accepted"
      class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
    >
      {{ item.description }}
    </b-form-checkbox>

    <hr class="border-white" />
    <!--budg-->
    <h6 class="pb-xxs-3">Budget</h6>
    <VueSimpleRangeSlider :min="0" :max="5000" :logarithmic="true" v-model="range" />
    <b-row no-gutters>
      <b-col>
        <div class="bg-white p-xxs-1 border-right">
          <span class="text-uppercase d-block text-xxs-xxs">Min price</span>
          <span class="text-gray-300 text-xxs-xxs">TWD {{ range[0] }}</span>
        </div>
      </b-col>
      <b-col>
        <div class="bg-white p-xxs-1">
          <span class="text-uppercase d-block text-xxs-xxs">Max price</span>
          <span class="text-gray-300 text-xxs-xxs">TWD {{ range[1] }}</span>
        </div>
      </b-col>
    </b-row>
    <hr class="border-white" />
    <!--rating-->
    <h6 class="pb-xxs-3">Rating</h6>
    <b-form-checkbox
      id="checkbox-1"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
      class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
    >
      <div class="d-flex">
        <span class="material-icons" v-for="item in 5" :key="item.index"> star</span>
        <span class="ml-xxs-1">5.0</span>
      </div>
    </b-form-checkbox>

    <b-form-checkbox
      id="checkbox-2"
      name="checkbox-2"
      value="accepted"
      unchecked-value="not_accepted"
      class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
    >
      <div class="d-flex">
        <span class="material-icons" v-for="item in 4" :key="item.index"> star</span>
        <span class="ml-xxs-1">4.0</span>
      </div>
    </b-form-checkbox>

    <b-form-checkbox
      id="checkbox-3"
      name="checkbox-3"
      value="accepted"
      unchecked-value="not_accepted"
      class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
    >
      <div class="d-flex">
        <span class="material-icons" v-for="item in 3" :key="item.index"> star</span>
        <span class="ml-xxs-1">3.0</span>
      </div>
    </b-form-checkbox>

    <b-form-checkbox
      id="checkbox-4"
      name="checkbox-4"
      value="accepted"
      unchecked-value="not_accepted"
      class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
    >
      <div class="d-flex">
        <span class="material-icons" v-for="item in 2" :key="item.index"> star</span>
        <span class="ml-xxs-1">2.0</span>
      </div>
    </b-form-checkbox>

    <b-form-checkbox
      id="checkbox-5"
      name="checkbox-5"
      value="accepted"
      unchecked-value="not_accepted"
      class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
    >
      <div class="d-flex">
        <span class="material-icons" v-for="item in 1" :key="item.index"> star</span>
        <span class="ml-xxs-1">1.0</span>
      </div>
    </b-form-checkbox>

    <b-form-checkbox
      id="checkbox-6"
      name="checkbox-6"
      value="accepted"
      unchecked-value="not_accepted"
      class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
    >
      <span>Unrated</span>
    </b-form-checkbox>
    <!--rating-->
    <hr class="border-white" />
    <h6 class="pb-xxs-3">Stay type</h6>
    <b-form-checkbox
      v-for="item in stayType"
      :key="item.index"
      :id="`StayType - ${item.value}`"
      :name="`StayType - ${item.value}`"
      value="accepted"
      unchecked-value="not_accepted"
      class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
    >
      {{ item.description }}
    </b-form-checkbox>
  </div>
</template>

<script>
import VueSimpleRangeSlider from "vue-simple-range-slider";

export default {
  components: { VueSimpleRangeSlider },
  data() {
    return {
      status: false,
      range: [20, 1000],
      number: 10,
      Deals: [
        {
          value: 1,
          description: "Free cancellation",
          status: false,
        },
        {
          value: 2,
          description: "No prepaymentn",
          status: false,
        },
        {
          value: 3,
          description: "Special offers",
          status: false,
        },
      ],
      Popular: [
        {
          value: 1,
          description: "Breakfast includedn",
          status: false,
        },
        {
          value: 2,
          description: "Free Wi-Fin",
          status: false,
        },
        {
          value: 3,
          description: "Swimming pool",
          status: false,
        },
      ],
      stayType: [
        {
          value: 1,
          description: "Hotel",
          status: false,
        },
        {
          value: 2,
          description: "Apartment",
          status: false,
        },
        {
          value: 3,
          description: "Unique",
          status: false,
        },
        {
          value: 4,
          description: "Hostel",
          status: false,
        },
      ],
    };
  },
};
</script>
