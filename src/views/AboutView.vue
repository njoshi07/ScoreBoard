<template>
  <div class="container">
    <h4>Display Score</h4>
    <!--- accordian-->
    <div id="accordion">
      <!-- card which holds all cards-->
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Collapsible Group Item #123
            </button>
          </h5>
        </div>
        <!---- individual card--->
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body">
            <div v-for="displayPlayedGame in displayPlayedGames">
              <div class="card text-left m-4">
                <div class="card-header">
                  <h4>
                    {{ displayPlayedGame.playerwithmaxwins }} wins max number of
                    {{ displayPlayedGame.maxgamewinner }} games out of
                    {{ displayPlayedGame.totalgames }}
                  </h4>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Won on {{ displayPlayedGame.selectplayeddate }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--- -->
      </div>
      <!-- card-->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    displayPlayedGames() {
      return this.$store.getters.getPlayedGameDetails;
    },
  },
};
</script>

<style>
</style>
