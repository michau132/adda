<template>
  <div class="c-image-upload">
    <vue-dropzone
      class="c-image-upload__dropzone"
      ref="dropzone"
      id="register"
      @vdropzone-max-files-exceeded="onMaxFilesExceeded"
      :useCustomSlot="true"
      @vdropzone-file-added="onFileAdded"
      @vdropzone-error="onDropzoneError"
      :options="dropzoneOptions"
    >
      <Button class="c-image-upload__text">
        {{ btnText }}
      </Button>
    </vue-dropzone>
  </div>
</template>

<script>
const maxFilesToAdd = 1;
import Button from "./Button";
export default {
  name: "ImageUpload",
  components: { Button },
  props: {
    btnText: {
      type: String
    },
    value: {},
    maxFiles: {
      type: Number,
      default() {
        return maxFilesToAdd;
      }
    }
  },
  data() {
    return {
      errorMessage: ""
    };
  },
  computed: {
    dropzoneOptions() {
      return {
        autoProcessQueue: false,
        url: "someUrl",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        maxFiles: this.maxFiles,
        maxFilesize: 1,
        acceptedFiles: "image/*"
      };
    }
  },
  methods: {
    onMaxFilesExceeded(e) {
      this.$refs.dropzone.removeAllFiles();
      this.$refs.dropzone.addFile(e);
    },
    onFileAdded(e) {
      if (e.size <= 1000000) {
        this.errorMessage = "";
      }
      setTimeout(() => {
        this.$emit("input", e.dataURL);
      }, 100);
    },
    onDropzoneError(file, message) {
      if (file.size > 1000000) {
        this.errorMessage = message;
      }
    }
  }
};
</script>

<style lang="scss">
.dz-success-mark,
.dz-error-mark,
.dz-size,
.dz-filename {
  display: none;
}
.dz-image {
  width: 100px;
  height: 100px;
  margin: 15px auto;
  img {
    border-radius: 50%;
    box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.25);
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
.c-image-upload {
  margin-bottom: 28px;
}
.c-image-upload__text {
  width: unset;
  margin: 0 auto;
}
</style>
