<template>
  <div class="c-input">
    <label v-if="label" class="c-input__label">{{ label }}</label>
    <input
      class="c-input__input"
      :value="value"
      @input="onInput"
      :placeholder="placeholder"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String
    },
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default() {
        return "text";
      }
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style scoped>
.c-input__input {
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #999;
  padding: 5px 10px;
  margin-bottom: 28px;
}
</style>
