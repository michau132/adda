<template>
  <div id="app" :class="{ pb: isVisible }">
    <Header v-if="isVisible" />
    <router-view />
    <Footer v-if="isVisible" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  computed: {
    isVisible() {
      return this.$route.meta.navigation;
    }
  },
  async mounted() {
    await this.$store.dispatch("getInterests");
  }
};
</script>

<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
  background-color: #ebebeb;
}
.title {
  padding: 23px 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.wrapper {
  padding: 42px 30px 50px;
  box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
}
.fullHeightAndCenter {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pb {
  padding-top: 70px;
  padding-bottom: 114px;
}
</style>
