<template>
  <div @drag.stop @dragstart.stop @click.stop class="image-rate">
    <VueRangeSlider
      v-model="count"
      stop-propagation
      :step="1"
      :min="0"
      :max="10"
      ref="slider"
      :dot-size="50"
    >
    </VueRangeSlider>
  </div>
</template>

<script>
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";
export default {
  name: "ImageRate",
  components: {
    VueRangeSlider
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>
<style lang="scss">
.vue-range-slider.slider-component .slider .slider-dot.slider-always {
  background-image: url("/img/star-solid.svg");
  background-repeat: no-repeat;
  background-color: transparent;
  box-shadow: unset;
  background-position: center center;
}
.vue-range-slider.slider-component .slider-tooltip-wrap.slider-tooltip-top {
  top: 34px;
}
.vue-range-slider.slider-component .slider-tooltip-wrap .slider-tooltip {
  background-color: transparent;
  border: none;
}
.vue-range-slider.slider-component
  .slider-tooltip-wrap.slider-tooltip-top
  .slider-tooltip::before {
  content: unset;
}
.vue-range-slider {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
<style scoped>
.image-rate {
  height: 25px;
}
</style>
