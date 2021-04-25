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
    <p class="center" v-if="cast.person.birthday">
        <b>DOB :</b>{{cast.person.birthday}}</p>
    </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Cast",
  props: ["cast"],
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