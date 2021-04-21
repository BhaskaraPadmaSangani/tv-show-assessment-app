<template>
  <b-container fluid class="footer">
    Copyright &copy; {{ getFormattedDate() }} —
    <strong>Tv Show Applicarion</strong>
  </b-container>
</template>

<script>
import formattedDate from "../filters/dateFilter.js";
export default {
  name: "Footer",
  methods: {
    getFormattedDate() {
      return formattedDate();
    },
  },
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
</style>
