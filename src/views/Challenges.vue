<template>
  <div class="v-challenges">
    <template v-if="!!challenges.length">
      <ChallengePost
        v-for="(challenge, index) in challenges"
        :key="index"
        :challenge="challenge"
      />
    </template>
  </div>
</template>

<script>
import ChallengePost from "../components/ChallengePost/ChallengePost";
import ApiService from "../api";
export default {
  name: "Challenges",
  components: { ChallengePost },
  data() {
    return {
      challenges: []
    };
  },
  async mounted() {
    const res = await ApiService.get("getChallenges");
    this.challenges = res.data.challenges;
    console.log(this.challenges);
  }
};
</script>

<style scoped>
.v-challenges {
  padding: 20px 0;
}
</style>
