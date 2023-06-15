<template>
  <div class="container">
    <h4>Display Score</h4>
    <YearlyGamesDetails></YearlyGamesDetails>
    <!--- accordian-->

    <!-- <div v-for="displayPlayedGame in displayPlayedGames">
      
    </div> -->
    <!--- *** -->
  </div>
</template>

<script>
import YearlyGamesDetails from "@/components/YearlyGamesDetails.vue";
export default {
  components: {
    YearlyGamesDetails,
  },
  data() {
    return {
      playedGameYear: "",
    };
  },
  computed: {
    displayPlayedGames() {
      console.log(
        "this.$store.getters.getPlayedGameDetails",
        this.$store.getters.getPlayedGameDetails
      );
      return this.$store.getters.getPlayedGameDetails;
    },
  },
};
</script>

<style>
</style>
