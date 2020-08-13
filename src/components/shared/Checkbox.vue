<template>
  <div class="c-checkbox" :class="{ 'c-checkbox--checked': value }">
    <div @click="onClick" class="c-checkbox__checkbox" v-html="isChecked"></div>
    <div @click="onClick" class="c-checkbox__placeholder">
      {{ placeholder }}
    </div>
  </div>
</template>

<script>
import iconCheck from "@/assets/img/check-solid.svg";
export default {
  name: "Checkbox",
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: Boolean
    }
  },
  methods: {
    onClick() {
      this.$emit("input", !this.value);
    }
  },
  computed: {
    isChecked() {
      if (this.value) {
        return iconCheck;
      }
      return null;
    }
  }
};
</script>

<style lang="scss" scoped>
.c-checkbox {
  margin-bottom: 28px;
  display: flex;
  align-items: center;
}
.c-checkbox__checkbox {
  width: 14px;
  height: 14px;
  border: 1px solid #999999;
  display: flex;
  justify-content: center;
  align-items: center;

  ::v-deep svg {
    object-fit: contain;
    width: 90%;
    height: 90%;
  }
}
.c-checkbox__placeholder {
  padding-left: 8px;
  color: #757575;
}
.c-checkbox__checkbox,
.c-checkbox__placeholder {
  cursor: pointer;
}
</style>
