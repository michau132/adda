<template>
  <div class="carousel">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="carousel__slide">
          <div class="carousel__img-cnt">
            <img
              src="https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612"
              alt=""
              class="carousel__img"
            />
          </div>
          <ImageRate class="no-swipe" />
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
      </swiper-slide>
      <swiper-slide
        ><div class="carousel__slide">
          <img
            src="https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612"
            alt=""
            class="carousel__img"
          /></div
      ></swiper-slide>
      <swiper-slide>
        <div class="carousel__slide">
          <img
            src="https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612"
            alt=""
            class="carousel__img"
          />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import ImageRate from "./ImageRate";
import ButtonIcon from "../shared/ButtonIcon";
export default {
  name: "Carousel",
  components: {
    swiper,
    swiperSlide,
    ImageRate,
    ButtonIcon
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 20,
        speed: 500,
        pagination: {
          el: ".swiper-pagination"
        },
        noSwiping: true,
        noSwipingClass: "no-swipe"
      }
    };
  }
};
</script>
<style lang="scss">
.swiper-pagination.swiper-pagination-bullets {
  bottom: 170px;
}
.swiper-pagination-bullet {
  background-color: #f6ede1;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 8px;
  width: 12px;
  height: 12px;
}
</style>
<style lang="scss" scoped>
.carousel__slide {
  width: 100%;
  height: 100%;
  position: relative;
}
.carousel__img-cnt {
  height: 300px;
}
.carousel__img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.carousel__owner {
  text-align: center;
}
.carousel__rate {
  color: #fec850;
}
.carousel__figcaption {
  color: #3b3b3b;
  font-weight: bold;
}
.carousel__actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
</style>
