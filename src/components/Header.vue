<template>
  <header class="c-header">
    <h2 class="c-header__logo title">CHALLENGES</h2>
    <div class="c-header__img">
      <img src="/img/img_avatar3.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.c-header {
  padding: 0 20px;
  display: flex;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  align-items: center;
  background-color: #ee8905;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.c-header__logo {
  flex-grow: 1;
  color: #ffffff;
  font-weight: normal;
  letter-spacing: 1px;
}
.c-header__img {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #000;
  overflow: hidden;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
</style>
