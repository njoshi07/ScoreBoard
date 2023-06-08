<template>
  <div class="container">
    <!-- Validations ****
     - Total Games Played form field = shouldn't less then 1 nor minus 
     - Number of Max games Won by Player form field = shouldn't exid total games played number
     - Enter Date Played form field = should be sysdate or past date. futere date can't expect -->
    <!-- Display error message -->
    <div :class="errorOn ? 'alert alert-danger' : ''" role="alert">
      <span :class="errorOn ? '' : 'd-none'">Fill all fields</span>
    </div>
    <!-- submit form -->
    <form @submit.prevent="enterGameData">
      <div class="form-group">
        <label for="exampleInputEmail1">Total Games Played</label>
        <input type="number" class="form-control" v-model="totalgames" />
      </div>

      <div class="form-group">
        <label for="maxgameswinner">Select Player With Max Wins</label>
        <select class="form-control" v-model="playerwithmaxwins">
          <option disabled value="">Select Player</option>
          <option>Player 1</option>
          <option>Player 2</option>
          <option>Player 3</option>
        </select>
      </div>

      <div class="form-group">
        <label for="maxgameswinner"
          >Max number of games won by
          <span class="text-info">{{ playerwithmaxwins }}</span></label
        >
        <input type="number" class="form-control" v-model="maxgamewinner" />
      </div>

      <div class="form-group">
        <label class="form-date mr-5" for="selectdate">Enter Date Played</label>
        <input
          type="date"
          class="p-1"
          v-model="selectplayeddate"
          name="abc"
          value=""
          max="2025-12-31"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import FormFieldsValidation from "@/js/FormFieldsValidation";

export default {
  data() {
    return {
      totalgames: "",
      playerwithmaxwins: "",
      maxgamewinner: "",
      selectplayeddate: "",
      errorOn: false,
    };
  },

  methods: {
    enterGameData() {
      // validation before submit
      debugger;
      let validateFields = new FormFieldsValidation(
        this.totalgames,
        this.playerwithmaxwins,
        this.maxgamewinner,
        this.selectplayeddate
      );

      console.log(validateFields.allFieldsShouldBeFilled());
      // submit form data
      if (validateFields.allFieldsShouldBeFilled()) {
        this.$store.commit("addplayedGameData", {
          totalgames: this.totalgames,
          playerwithmaxwins: this.playerwithmaxwins,
          maxgamewinner: this.maxgamewinner,
          selectplayeddate: this.selectplayeddate,
        });

        // Clearing out fields once submitted
        this.totalgames = "";
        this.playerwithmaxwins = "";
        this.maxgamewinner = "";
        this.selectplayeddate = "";

        // Redirect to record list page
        this.$router.push("about");
      } else {
        this.errorOn = true;
      }
    },
  },
};
</script>

<style>
</style>