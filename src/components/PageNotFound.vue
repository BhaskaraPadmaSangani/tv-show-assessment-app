<template>
  <div class="home" fluid>
    <div class="ml-4 pl-1">
      <!-- why this is not working
        @click="this.$router.push({ name: 'DisplayAllShows' })"-->
      <b-button
        variant="warning"
        class="mb-4"
        @click="$router.replace({ name: 'DisplayAllShows' })"
      >
        Home
      </b-button>
    </div>
    <div class="heading">
      <h2>
        <em>!!!!!!! Tv Show your are searching for are not found !!!!!!!!</em>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagenotfound",
};
</script>
<style scoped>
.heading {
  text-align: center;
  padding: 5rem;
  color: rgb(24, 250, 250);
  min-height: 100vh;
}
.home {
  background-color: rgb(54, 44, 61);
}
</style>
