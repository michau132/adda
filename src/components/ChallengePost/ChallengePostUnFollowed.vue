<template>
  <div class="c-challenge-post">
    <div class="c-challenge-post__post">
      <div class="post__header">
        <div class="post__profile-img">
          <img
            :src="
              'http://51.210.149.115/uploads' + challenge.interest[0].filename
            "
          />
        </div>
        <div class="post__info">
          <h4 class="post__title">{{ challenge.challenge.name }}</h4>
          <p class="post__author">By {{ challenge.created_by[0].name }}</p>
        </div>
      </div>
      <p class="post__description">
        <span>{{ challenge.challenge.description }}</span>
        <a href="#">...read more</a>
      </p>
      <div class="post__content">
        <div class="post__content-cnt">
          <img
            :src="
              'http://51.210.149.115/uploads/' + challenge.interest[0].filename
            "
            alt=""
            class="post__content-img"
          />
        </div>
        <div class="post__sended-img">
          <ButtonIcon icon="add" />
        </div>
        <!-- <div class="post__sended-img">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          />
        </div>
        <div class="post__sended-img">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          />
        </div> -->
      </div>

      <div class="post__footer">
        <div class="col-6 px-0">
          <h5 class="post__prize">Prize: {{ challenge.challenge.prize }}</h5>
          <h5 class="post__expiration">Closes in 3 d 15h</h5>
        </div>
        <div class="col-6 px-0 d-flex">
          <ButtonIcon icon="follow" label="Follow" />
          <ButtonIcon class="ml-auto" icon="share" label="Invite friends!" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonIcon from "../shared/ButtonIcon";
export default {
  name: "ChallengePost",
  components: {
    ButtonIcon
  },
  props: {
    challenge: {}
  }
};
</script>

<style lang="scss" scoped>
.c-challenge-post__post {
  margin-bottom: 10px;
  box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
  background-color: #fff;
}
.post__header {
  display: flex;
  margin-bottom: 20px;
  padding: 5px 10px;
}
.post__profile-img {
  width: 45px;
  height: 45px;
  align-self: center;
  justify-self: center;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.post__info {
  margin-left: 10px;
}
.post__author {
  margin-top: 8px;
  font-size: 14px;
  color: #484848;
}
.post__title {
  font-weight: 800;
  text-transform: capitalize;
  color: #484848;
  font-size: 18px;
}

.post__description {
  padding-left: 10px;
  padding-right: 20px;
  white-space: pre-line;
  display: flex;
  margin-bottom: 10px;

  a {
    align-self: flex-end;
    margin-left: auto;
    color: #1891e6;
    text-decoration: none;
    font-size: 14px;
  }
}

.post__content {
  position: relative;
}
.post__content-cnt {
  min-height: 200px;
  max-width: 100%;
  overflow: hidden;
}
.post__content-img {
  width: 100%;
}
.post__sended-img {
  position: absolute;
  bottom: 15px;
  right: 5px;
  width: 70px;
  height: 70px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.post__footer {
  display: flex;
  padding: 10px 20px 10px 10px;
}
.post__prize {
  color: #1891e6;
  line-height: 1.4;
}
.post__expiration {
  color: #ab3301;
  line-height: 1.4;
}
</style>
