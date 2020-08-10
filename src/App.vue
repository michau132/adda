<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from "./components/Login";
export default {
  name: "App",
  components: {
    Login
  }
};
</script>

<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  @media (min-width: 567px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
}
</style>
