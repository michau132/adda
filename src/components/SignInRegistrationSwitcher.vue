<template>
  <div class="sign-switcher row">
    <div class="col-6 d-flex justify-content-center">
      <router-link to="/login" class="sign-switcher__switcher">
        LOGIN
      </router-link>
    </div>
    <div class="col-6 d-flex justify-content-center">
      <router-link to="/register" class=" sign-switcher__switcher">
        REGISTER
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInRegistrationSwitcher"
};
</script>

<style scoped>
.sign-switcher {
  background-color: #dc4734;
}
.sign-switcher__switcher {
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  padding: 20px 0;
  text-decoration: none;
}
.sign-switcher__switcher.router-link-active {
  color: #333333;
}
</style>
