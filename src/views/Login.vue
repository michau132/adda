<template>
  <div class="c-login fullHeightAndCenter">
    <div class="container">
      <div class="wrapper">
        <SignInRegistrationSwitcher />
        <form class="c-login__form">
          <h2 class="title">Sign in</h2>
          <Input v-model="email" placeholder="Email or username" />
          <Input v-model="password" type="password" placeholder="Password" />
          <Button type="submit" label="Log in" />
          <h2 class="title">or</h2>
          <Button type="button" class="facebook-btn">
            <div class="icon" v-html="fbIcon"></div>
            <div>Facebook</div>
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import SignInRegistrationSwitcher from "../components/SignInRegistrationSwitcher";

import fbIcon from "@/assets/img/fb.svg";
export default {
  name: "Login",
  components: { Input, Button, SignInRegistrationSwitcher },
  data() {
    return {
      email: "",
      password: "",
      fbIcon
    };
  }
};
</script>

<style lang="scss" scoped>
.facebook-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1777f2;
  color: #ffffff;
  font-weight: 500;
  border: none;

  .icon {
    margin-right: 5px;
  }
}
</style>
