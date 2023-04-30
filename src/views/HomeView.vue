<template>
  <div class="container">
    <EnterScore></EnterScore>
  </div>
</template>

<script>
// @ is an alias to /src

import EnterScore from "@/components/EnterScore.vue";

export default {
  name: "HomeView",
  components: {
    EnterScore,
  },
};
</script>
