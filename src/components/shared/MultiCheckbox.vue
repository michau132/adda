<template>
  <div class="c-multi-checkbox">
    <p class="c-multi-checkbox__label">{{ label }}</p>
    <ul class="c-multi-checkbox__list">
      <li
        class="c-multi-checkbox__item"
        v-for="(option, index) in options"
        :key="index"
      >
        <Checkbox
          class="c-multi-checkbox__checkbox"
          :placeholder="option.interest.interest"
          :value="isInArr(option)"
          @input="onCheckboxClick(option)"
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
    },
    options: {},
    value: {
      type: Array
    }
  },
  methods: {
    isInArr(option) {
      return this.value.includes(option.interest.id);
    },
    onCheckboxClick(option) {
      if (this.isInArr(option)) {
        const arr = this.value.filter(el => el !== option.interest.id);
        this.$emit("input", arr);
      } else {
        this.$emit("input", [...this.value, option.interest.id]);
      }
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
