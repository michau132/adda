<template>
  <button
    :type="type"
    class="btn"
    :class="{ ['btn-' + icon]: true, 'btn--inline': alignLabel }"
    @click="$emit('click')"
  >
    <div class="btn__icon" v-html="iconProp"></div>
    <p v-if="label" class="btn__label">{{ label }}</p>
  </button>
</template>

<script>
import add from "@/assets/img/plus-solid.svg";
import follow from "@/assets/img/follow.svg";
import share from "@/assets/img/share.svg";
export default {
  name: "ButtonIcon",
  props: {
    type: {
      type: String,
      default() {
        return "button";
      }
    },
    icon: {
      type: String
    },
    label: {
      type: String
    },
    alignLabel: {
      type: Boolean
    }
  },
  computed: {
    iconProp() {
      const icons = {
        add,
        follow,
        share
      };
      return icons[this.icon] || "Import icon";
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  background-color: transparent;
  border: none;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn__icon {
  width: 16px;
  height: 16px;
  ::v-deep svg {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
.btn-add {
  background-color: #ee8905;
  width: 100%;
  height: 100%;
  .btn__icon {
    width: 40px;
    height: 40px;
  }
}
.btn__label {
  color: #656565;
  font-size: 13px;
}
.btn--inline {
  flex-direction: row;
  .btn__icon {
    margin-right: 8px;
  }
}
</style>
