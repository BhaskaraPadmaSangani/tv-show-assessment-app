<template>
  <div class="home" fluid>
    <div class="ml-4">
      <router-link to="/">
      <b-button
        variant="warning"
        class="mb-4"
      >
        Home
      </b-button>
      </router-link>
    </div>
    <div class="heading">
      <h2>
        !!!!!!! Tv Show your are searching for are not found !!!!!!!!
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
  color: rgb(24, 250, 250);
}
.home {
  background-color: rgb(54, 44, 61);
  height:100vh;
}
</style>
