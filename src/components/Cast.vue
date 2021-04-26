<template>
  <div class="mt-3">
    <b-card class="color">
      <img class="card-border" :src="castImage" v-if="castImage" />
      <div v-else class="card">
        <h3>Image Not Available</h3>
      </div>
      <div class="mt-2">
        <span class="cast-person-name">
          {{ cast.person.name }}
        </span>
        <div class="text-info">as</div>
        <span class="cast-character-name">
          {{ cast.character.name }}
        </span>
      </div>
    </b-card>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
export default {
  name: "Cast",
  props: ["cast"],
  components: {
    "b-card": BCard,
  },
  computed: {
    castImage() {
      if (this.cast.character.image) {
        return (
          this.cast.character.image.medium || this.cast.character.image.original
        );
      }
      if (this.cast.person.image) {
        return this.cast.person.image.medium || this.cast.person.image.original;
      }
      return null;
    },
  },
};
</script>
<style scoped>
.color {
  background-color: rgb(204, 202, 202);
  margin-bottom: 50px;
}
</style>