<template>
  <div class="c-multi-checkbox">
    <p class="c-multi-checkbox__label">{{ label }}</p>
    <ul class="c-multi-checkbox__list">
      <li class="c-multi-checkbox__item">
        <Checkbox
          class="c-multi-checkbox__checkbox"
          placeholder="First item"
          :value="true"
        />
      </li>
      <li class="c-multi-checkbox__item">
        <Checkbox
          class="c-multi-checkbox__checkbox"
          placeholder="Second item"
          :value="true"
        />
      </li>
      <li class="c-multi-checkbox__item">
        <Checkbox
          class="c-multi-checkbox__checkbox"
          placeholder="Third item"
          :value="true"
        />
      </li>
      <li class="c-multi-checkbox__item">
        <Checkbox
          class="c-multi-checkbox__checkbox"
          placeholder="Fourth item"
          :value="true"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Multicheckbox",
  components: {
    Checkbox
  },
  props: {
    label: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.c-multi-checkbox {
  margin-bottom: 28px;
}
.c-multi-checkbox__list {
  display: flex;
  flex-wrap: wrap;
}
.c-multi-checkbox__item {
  margin: 10px 20px 10px 0;
}
.c-multi-checkbox__checkbox {
  margin: 0;
}
</style>
