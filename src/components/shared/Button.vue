<template>
  <button :type="type" @click="$emit('click', $event)">
    <template v-if="isSlot">
      <slot></slot>
    </template>
    <template v-else>{{ label }}</template>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String
    },
    type: {
      type: String,
      default() {
        return "button";
      }
    }
  },
  computed: {
    isSlot() {
      return this.$slots.default;
    }
  }
};
</script>

<style scoped>
button {
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  font-size: 14px;
  font-weight: 500;
  color: #dc4734;
  line-height: 1;
  padding: 12px 32px;
  display: inline-block;
  border: 1px solid #dc4734;
  background-color: #fff;
  display: block;
  width: 100%;
}
</style>
