<template>
  <div class="c-image-select">
    <div class="c-image-select__list">
      <div
        v-for="(image, index) in imagesOnly"
        :key="index"
        class="c-image-select__item"
        @click="setCurrentImage(image)"
      >
        <div
          class="c-image-select__checkbox"
          v-html="isCurrentImage(image)"
        ></div>
        <div
          class="c-image-select__img"
          :style="{
            backgroundImage: 'url(' + image + ')'
          }"
        />
      </div>
      <div class="c-image-select__item ">
        <ImageUpload
          btnText="Add custom photo"
          :maxFiles="100"
          @input="onFileAdded"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImageUpload from "./shared/ImageUpload";
import iconCheck from "@/assets/img/check-solid.svg";
export default {
  name: "ImageSelect",
  components: { ImageUpload },
  data() {
    return {
      imagesProp: []
    };
  },
  computed: {
    imagesOnly() {
      return this.imagesProp.map(el => (el.dataURL ? el.dataURL : el));
    }
  },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: [String, Object]
    }
  },
  watch: {
    images: {
      immediate: true,
      handler(imgs) {
        this.imagesProp = imgs;
      }
    }
  },
  methods: {
    onFileAdded(file) {
      this.imagesProp = [...this.imagesProp, file];
    },
    setCurrentImage(image) {
      this.$emit("input", image);
    },
    isCurrentImage(img) {
      if (this.value === img) {
        return iconCheck;
      }
      return null;
    }
  }
};
</script>
<style lang="scss">
.c-image-select {
  .c-image-upload__text {
    padding: 10px 16px;
  }
  .c-image-upload {
    margin-bottom: 0;
  }
  .dz-preview.dz-image-preview {
    display: none;
  }
}
</style>
<style lang="scss" scoped>
.c-image-select__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.c-image-select__item {
  position: relative;
  width: 80px;
  height: 100px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-image-select__img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}
.c-image-select__checkbox {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 1;
  border: 1px solid #f5f5f5;

  ::v-deep svg {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  ::v-deep path {
    fill: green;
  }
}
</style>
