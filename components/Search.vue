<template>
<b-form inline class="form-xl justify-content-center bg-secondary mx-auto">
          <b-input-group class="mr-0 mr-lg-3 mb-3 mb-lg-0" size="lg">
            <template #prepend>
              <b-input-group-text>
                <span class="material-icons"> room </span>
              </b-input-group-text>
            </template>
            <b-form-input placeholder="Destination"></b-form-input>
          </b-input-group>
          <b-input-group class="mr-0 mr-lg-3 mb-3 mb-lg-0" size="lg">
            <template #prepend>
              <b-input-group-text>
                <span class="material-icons"> date_range </span>
              </b-input-group-text>
            </template>
            <b-form-input placeholder="Check-in / Check-out"></b-form-input>
          </b-input-group>
          <b-input-group class="mr-0 mr-lg-3 mb-3 mb-lg-0" size="lg">
            <template #prepend>
              <b-input-group-text>
                <span class="material-icons"> person </span>
              </b-input-group-text>
            </template>
            <b-form-input placeholder="Guests"></b-form-input>
          </b-input-group>
          <b-button variant="primary" class="btn-md font-weight"
            >SEARCH</b-button
          >
        </b-form>
</template>