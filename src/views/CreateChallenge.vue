<template>
  <div class="c-create-challenge">
    <div class="container">
      <div class="wrapper">
        <form class="c-create-challenge__form">
          <Input placeholder="Nome della challenge*" v-model="fields.name" />
          <Input
            placeholder="Descrizione della challenge"
            v-model="fields.description"
          />
          <Select
            placeholder="Durata"
            :options="timeSelect"
            v-model="fields.duration"
          />
          <Select
            placeholder="Categoria"
            :options="categories"
            v-model="fields.category"
          />
          <ImageSelect :images="images" v-model="fields.image" />
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

export default {
  name: "CreateChallenge",
  components: {
    Input,
    Select,
    ImageSelect,
    Checkbox,
    Button
  },
  data() {
    return {
      timeSelect: [
        { label: "1 ora", value: "hour" },
        { label: "1 giorno", value: "day" },
        { label: "1 settimana", value: "week" }
      ],
      categories: [
        { label: "Travel", value: "travel" },
        { label: "Travel3", value: "travel3" }
      ],
      rewards: [
        { label: "Birra", value: "beer" },
        { label: "Gratitudine", value: "gratitude" },
        { label: "Complimenti", value: "complimenti" }
      ],
      images: [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?ixlib=rb-1.2.1&w=1000&q=80",
        "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
      ],
      fields: {
        duration: "",
        category: "",
        image: "",
        name: "",
        description: "",
        reward: "",
        decide: true
      }
    };
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
