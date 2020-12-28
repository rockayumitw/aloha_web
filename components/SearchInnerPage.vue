<template>
  <div>
    <b-form
      inline
      class="form-xl justify-content-center bg-secondary mx-auto d-none d-lg-flex"
    >
      <b-input-group class="mr-0 mr-sm-3 mr-lg-3 mb-lg-0" size="lg">
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
              <span class="text-xxs-sm d-block">Bangk..ok</span>
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
      <b-input-group class="mr-0 mr-sm-3 mr-lg-3 mb-lg-0" size="lg">
        <template #prepend>
          <b-input-group-text>
            <span class="material-icons"> date_range </span>
          </b-input-group-text>
          <date-picker
            class="border-0"
            v-model="date"
            :default-value="new Date()"
            type="date"
            range
            placeholder="Check-in / Check-out"
          ></date-picker>
        </template>
      </b-input-group>
      <b-input-group class="mr-0 mr-sm-3 mr-lg-3 mb-lg-0" size="lg">
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
      <b-button variant="primary" class="btn-md font-weight">SEARCH</b-button>
    </b-form>
    <div class="bg-secondary b-block d-lg-none">
      <b-container>
        <b-row>
          <b-col class="text-gray-300 border-right text-center">
            <div class="pt-3 pb-3">Bangkok</div>
          </b-col>
          <b-col class="text-gray-300 border-right text-center">
            <div class="pt-3 pb-3">17 June - 19 June</div>
          </b-col>
          <b-col class="text-gray-300 text-center">
            <div class="pt-3 pb-3">2 adults・1 room</div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
export default {
  components: { DatePicker },
  data() {
    return {
      active: false,
      active2: false,
      date: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      value1: 0,
      value2: 0,
      value3: 0,
      defaultValue: "",
    };
  },
};
</script>
