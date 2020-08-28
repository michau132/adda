<template>
  <footer class="c-footer">
    <div class="container">
      <div class="c-footer-cnt">
        <router-link to="/challenges" class="c-footer__link">
          <div
            class="c-footer__icon c-footer__icon--unread"
            v-html="homeIcon"
          ></div>
        </router-link>
        <router-link to="/create" class="c-footer__link">
          <div class="c-footer__icon" v-html="createChallenge"></div>
        </router-link>
        <router-link to="/challenges" class="c-footer__link">
          <div
            class="c-footer__icon c-footer__icon--unread"
            v-html="trophyIcon"
          ></div>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import homeIcon from "@/assets/img/home.svg";
import createChallenge from "@/assets/img/create-challenge.svg";
import trophyIcon from "@/assets/img/tournament.svg";

export default {
  name: "Footer",
  data() {
    return {
      homeIcon,
      createChallenge,
      trophyIcon
    };
  }
};
</script>

<style lang="scss" scoped>
.c-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.c-footer-cnt {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
}
.c-footer__link {
  width: 34px;
  height: 34px;
}
.c-footer__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::v-deep svg {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
.c-footer__icon--unread {
  &::after {
    content: "";
    position: absolute;
    top: -5px;
    right: -6px;
    width: 20px;
    height: 20px;
    background-color: #da7e45;
    border-radius: 50%;
  }
}
</style>
