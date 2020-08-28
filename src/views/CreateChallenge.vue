<template>
  <div class="c-create-challenge">
    <div class="container">
      <div class="wrapper">
        <form class="c-create-challenge__form" @submit="onSubmit">
          <Input placeholder="Nome della challenge*" v-model="fields.name" />
          <Input
            placeholder="Descrizione della challenge"
            v-model="fields.description"
          />
          <Select
            placeholder="Durata"
            :options="timeSelect"
            v-model="duration"
          />
          <Select
            placeholder="Categoria"
            :options="categories"
            v-model="fields.category"
          />
          <ImageSelect
            v-if="fields.category"
            :images="images"
            v-model="fields.image"
          />
          <Select
            placeholder="Premio"
            :options="rewards"
            v-model="fields.reward"
          />
          <Checkbox placeholder="Decido Io" v-model="fields.decide" />
          <Button type="submit">Pulsante crea</Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/shared/Input";
import Select from "../components/shared/Select";
import Checkbox from "../components/shared/Checkbox";
import Button from "../components/shared/Button";
import ImageSelect from "../components/ImageSelect";

import moment from "moment";
import ApiService from "../api";
import { mapGetters } from "vuex";
export default {
  name: "CreateChallenge",
  components: {
    Input,
    Select,
    ImageSelect,
    Checkbox,
    Button
  },
  computed: {
    ...mapGetters(["interests"]),
    categories() {
      return this.interests.map(el => ({
        label: el.interest.interest,
        value: el.interest.id
      }));
    },
    images() {
      const interest = this.interests.find(
        el => el.interest.id === this.fields.category
      );
      if (interest) {
        return interest.interestmedia.map(
          el => `http://51.210.149.115/uploads${el.filename}`
        );
      }
      return [];
    }
  },
  data() {
    return {
      timeSelect: [
        { label: "1 ora", value: "hour" },
        { label: "1 giorno", value: "day" },
        { label: "1 settimana", value: "week" }
      ],
      rewards: [
        { label: "Birra", value: "beer" },
        { label: "Gratitudine", value: "gratitude" },
        { label: "Complimenti", value: "complimenti" }
      ],
      duration: "",
      fields: {
        ends_at: "",
        category: "",
        image: "",
        name: "",
        description: "",
        reward: "",
        decide: true,
        isFollowing: true
      }
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.fields.ends_at = moment()
        .add(1, this.duration)
        .toISOString();

      ApiService.post("createChallenge", this.fields);
    }
  }
};
</script>

<style lang="scss" scoped>
.c-create-challenge {
  margin-top: 50px;
}
.c-create-challenge__form {
  background-color: #fff;
}
</style>
