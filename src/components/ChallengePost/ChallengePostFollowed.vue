<template>
  <div class="post-follow">
    <div class="post-follow__header">
      <div class="post-follow__category-img">
        <img
          :src="
            'http://51.210.149.115/uploads' + challenge.interest[0].filename
          "
          alt=""
        />
      </div>
      <div class="post-follow__info">
        <h3 class="post-follow__created">
          Posted in: <span>{{ challenge.interest[0].interest }}</span>
        </h3>
        <p class="post-follow__expire">Close in 3d 15h</p>
        <p class="post-follow__unread-count">
          <span>12 more entries</span>
          in the challenge
        </p>
      </div>
    </div>
    <Carousel />
    <p class="carousel__owner">
      <span class="carousel__rate">Rate </span>
      <span class="carousel__figcaption">Suno cat </span>
      <span>by </span>
      <span class="carousel__creator">John Rambo </span>
    </p>
    <div class="carousel__actions">
      <ButtonIcon icon="share" label="Invite firends!" alignLabel />
      <ButtonIcon icon="follow" label="Follow" alignLabel />
      <a href="#">more...</a>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import ButtonIcon from "../shared/ButtonIcon";
export default {
  name: "ChallengePostFollowed",
  components: {
    Carousel,
    ButtonIcon
  },
  props: {
    challenge: {}
  }
};
</script>

<style lang="scss" scoped>
.carousel__owner {
  text-align: center;
}
.carousel__actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.post-follow {
  margin-bottom: 10px;
  box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
  background-color: #fff;
}
.post-follow__header {
  display: flex;
  align-items: center;
  padding: 5px;
}
.post-follow__category-img {
  width: 80px;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    width: 100%;
  }
}
.post-follow__info {
  padding: 0 10px;
  flex-grow: 1;
}
.post-follow__created {
  line-height: 1.4;
  margin-bottom: 5px;
  span {
    font-weight: bold;
    font-size: 18px;
  }
}
.post-follow__expire {
  padding-bottom: 5px;
  color: #ab3301;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.post-follow__unread-count {
  margin-top: 10px;
  font-size: 14px;
  span {
    font-weight: bold;
  }
}
</style>
