<template>
  <ChallengePostUnFollowed v-if="false" />
  <ChallengePostFollowed v-else />
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
    post: {
      type: Object
    }
  }
};
</script>

<style></style>
