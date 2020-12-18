<template>
<div class="bg-secondary p-xxs-6">
              <h6 class="pb-xxs-3">Deals</h6>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  I accept the terms and use
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  I accept the terms and use
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  I accept the terms and use
                </b-form-checkbox>
              <hr class="border-white">
              <h6 class="pb-xxs-3">Popular filter</h6>
              <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  I accept the terms and use
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  I accept the terms and use
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  I accept the terms and use
                </b-form-checkbox>
                <hr class="border-white">
                <h6 class="pb-xxs-3">Budget</h6>
                <b-form-input id="range-1" v-model="value" type="range" min="0" max="5"></b-form-input>
                
                <hr class="border-white">
                <!--rating-->
                <h6 class="pb-xxs-3">rating</h6>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  <b-form-rating id="rating-inline" inline readonly value="5" class="border-0 p-xxs-0 bg-transparent"></b-form-rating>
                </b-form-checkbox>
                 <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  <b-form-rating id="rating-inline" inline readonly value="4" class="border-0 p-xxs-0 bg-transparent"></b-form-rating>
                </b-form-checkbox>
                 <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  <b-form-rating id="rating-inline" inline readonly value="3" height="24" class="border-0 p-xxs-0 bg-transparent"></b-form-rating>
                </b-form-checkbox>
                 <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  <b-form-rating id="rating-inline" inline readonly value="2" class="border-0 p-xxs-0 bg-transparent"></b-form-rating>
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  <b-form-rating id="rating-inline" inline readonly value="1" class="border-0 p-xxs-0 bg-transparent"></b-form-rating>
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  Unrated
                </b-form-checkbox>
                <!--rating-->
                <h6 class="pb-xxs-3">Stay type</h6>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  I accept the terms and use
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  I accept the terms and use
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="text-xxs-sm lh-xxs-sm text-gray-300 pb-1"
                >
                  I accept the terms and use
                </b-form-checkbox>
            </div>
</template>

<script>
export default {
    data(){
        return{
            status: false,
            value: 5,
        }
    }
}
</script>