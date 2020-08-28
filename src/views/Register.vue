<template>
  <div class="c-register fullHeightAndCenter">
    <div class="container">
      <div class="wrapper">
        <SignInRegistrationSwitcher />
        <h2 class="title">Register</h2>
        <form class="c-register__form" @submit="onSubmit">
          <Input v-model="fields.name" placeholder="Nickname" />
          <Input v-model="fields.email" placeholder="Email" />
          <Input
            v-model="fields.password"
            placeholder="Password"
            type="password"
          />
          <Checkbox v-model="fields.above13" placeholder="Ho piu’ di 13 anni" />
          <MultiCheckbox
            label="My main interest:"
            :options="interests"
            v-model="fields.interests"
          />
          <ImageUpload
            btnText="Add your profile image"
            v-model="fields.image"
          />
          <Button type="submit" label="Pulsante Register" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SignInRegistrationSwitcher from "../components/SignInRegistrationSwitcher";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import Checkbox from "../components/shared/Checkbox";
import ImageUpload from "../components/shared/ImageUpload";
import MultiCheckbox from "../components/shared/MultiCheckbox";

import { mapGetters } from "vuex";
import ApiService from "../api";

const initialFields = {
  name: "",
  email: "",
  password: "",
  above13: true,
  interests: [],
  image: ""
};
export default {
  name: "Register",
  components: {
    SignInRegistrationSwitcher,
    Input,
    Button,
    Checkbox,
    MultiCheckbox,
    ImageUpload
  },
  data() {
    return {
      fields: {
        ...initialFields
      }
    };
  },
  computed: {
    ...mapGetters(["interests"])
  },

  methods: {
    async onSubmit(e) {
      e.preventDefault();
      await ApiService.post("register", this.fields);
      this.fields = initialFields;
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
