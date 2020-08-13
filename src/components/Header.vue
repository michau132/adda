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
  background-color: #fff;
}
.c-header__logo {
  flex-grow: 1;
}
.c-header__img {
  width: 34px;
  height: 34px;

  img {
    object-fit: contain;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
}
</style>
