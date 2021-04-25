<template>
  <b-container fluid class="footer mt-4">
    Copyright &copy; {{ new Date().getFullYear() }} —
    <strong>TvMaze.All Rights Reserved.</strong>
  </b-container>
</template>

<script>
//import formattedDate from "../filters/dateFilter.js";
export default {
  name: "Footer"
};
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(21, 174, 201);
  color: #000;
  text-align: center;
  font-size: 0.8em;
}
.mt-4{
    margin-top:-20px;
}
</style>
