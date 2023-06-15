<template>
  <div class="yearlygamesdetails">
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
              2023
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
            <MonthlyGamesDetails></MonthlyGamesDetails>
          </div>
        </div>
        <!--- -->
      </div>
      <!-- card-->
    </div>
    <!-- <MonthlyGamesDetails></MonthlyGamesDetails> -->
  </div>
</template>

<script>
import MonthlyGamesDetails from "@/components/MonthlyGamesDetails.vue";
export default {
  components: {
    MonthlyGamesDetails,
  },
};
</script>

<style>
</style>