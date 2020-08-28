<template>
  <div
    class="c-select"
    @click.stop="toggleOpen"
    :class="{ 'c-select--open': isOpen }"
  >
    <p class="c-select__current">
      {{ value ? label : placeholder }}
    </p>
    <ul
      class="c-select__list"
      :class="{ 'c-select__list--open': isOpen }"
      @click.stop
    >
      <li
        v-for="(option, index) in options"
        :key="index"
        class="c-select__option "
        :class="{ 'c-select__option--current': isCurrent(option) }"
        @click.stop="onOptionClick(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {},
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    label() {
      const option = this.options.find(el => el.value === this.value);
      if (option) {
        return option.label;
      }
      return "";
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },

    isCurrent(option) {
      return this.value === option.value;
    },

    onOptionClick(option) {
      this.$emit("input", option.value);
      this.isOpen = false;
    },
    outsideClick() {
      this.isOpen = false;
    }
  },
  beforeMount() {
    window.addEventListener("click", this.outsideClick);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.outsideClick);
  }
};
</script>

<style lang="scss" scoped>
.c-select__current {
  color: #757575;
}
.c-select {
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: normal;
  position: relative;
  transition: all 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid #999;
  padding: 5px 10px;
  margin-bottom: 28px;
  &:after {
    border-bottom: 2px solid #999;
    border-right: 2px solid #999;
    content: "";
    display: block;
    height: 5px;
    margin-top: -4px;
    pointer-events: none;
    position: absolute;
    right: 12px;
    top: 50%;
    -webkit-transform-origin: 66% 66%;
    -ms-transform-origin: 66% 66%;
    transform-origin: 66% 66%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
    width: 5px;
  }
}
.c-select--open {
  &:after {
    transform: rotate(-135deg);
  }
}
.c-select__list {
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.11);
  box-sizing: border-box;
  margin-top: 4px;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  transform-origin: 50% 0;
  transform: scale(0.75) translateY(-21px);
  transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
  z-index: -1;
}
.c-select__list--open {
  opacity: 1;
  transform: scale(1) translateY(0);
  z-index: 9;
}
.c-select__option {
  cursor: pointer;
  font-weight: 400;
  line-height: 40px;
  list-style: none;
  min-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 29px;
  text-align: left;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  &:hover {
    background-color: #f6f6f6;
  }
}
.c-select__option--current {
  font-weight: bold;
  background-color: #f6f6f6;
}
</style>
