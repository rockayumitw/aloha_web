<template>
  <div>
    <b-form class="form-xs mx-auto">
      <h3 class="h3 mb-xxs-3">Login</h3>
      <b-form-group id="email" label="email" label-for="email" class="text-gray-300">
        <b-form-input
          id="email"
          class="input-lg"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="password"
        label="password"
        label-for="password"
        class="text-gray-300"
      >
        <b-form-input
          id="password"
          class="input-lg"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <p class="text-xxs-xxs text-gray-300 mb-xxs-2">
        By signing in or creating an account, you agree with our
        <a href="/" class="text-primary">Terms & Conditions</a> and
        <a href="/" class="text-primary">Privacy Statement</a>
      </p>

      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="accepted"
        class="text-gray-300 mb-xxs-7"
        unchecked-value="not_accepted"
      >
        Remember me
      </b-form-checkbox>

      <b-button type="submit" variant="primary" class="btn-lg btn-primary mb-xxs-1"
        >Submit</b-button
      >
      <p class="text-gray-300 text-xxs-xxs text-center">
        Don’t have an account yet? <a href="/" class="text-primary">Sign up</a>
      </p>
      <button
        type=""
        class="btn-xs btn-black mt-xxs-17 mb-xxs-6 d-none d-sm-block d-lg-none mx-auto"
      >
        Osaka Castel, Japan
      </button>
    </b-form>
  </div>
</template>
