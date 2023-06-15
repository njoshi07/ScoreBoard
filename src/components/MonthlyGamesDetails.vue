<template>
  <div class="monthlygamedetails">
    <!-- <GameDetails></GameDetails> -->
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
              01
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
            <GameDetails></GameDetails>
          </div>
        </div>
        <!--- -->
      </div>
      <!-- card-->
    </div>
  </div>
</template>

<script>
import GameDetails from "@/components/GameDetails.vue";
export default {
  components: {
    GameDetails,
  },
};
</script>

<style>
</style>