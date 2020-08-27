<template>
  <div class="v-challenges">
    <ChallengePost />
  </div>
</template>

<script>
import ChallengePost from "../components/ChallengePost/ChallengePost";
export default {
  name: "Challenges",
  components: { ChallengePost }
};
</script>

<style scoped>
.v-challenges {
  padding: 20px 0;
}
</style>
