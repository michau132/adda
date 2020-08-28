<template>
  <ChallengePostFollowed
    v-if="challenge.user_is_follower"
    :challenge="challenge"
  />
  <ChallengePostUnFollowed v-else :challenge="challenge" />
</template>

<script>
import ChallengePostUnFollowed from "./ChallengePostUnFollowed";
import ChallengePostFollowed from "./ChallengePostFollowed";
export default {
  name: "ChallengePost",
  components: {
    ChallengePostUnFollowed,
    ChallengePostFollowed
  },
  props: {
    challenge: {
      type: Object
    }
  }
};
</script>

<style></style>
