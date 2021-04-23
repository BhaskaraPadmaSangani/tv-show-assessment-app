<template>
  <div class="mb-3 mt-4">
    <router-link :to="{ name: 'FullDetailsOfShow', params: { id: show.id } }">
      <img :src="show.image.medium || show.image.original" v-if="show.image" />
      <div v-else>
        <h2>Image Not Available</h2>
      </div>
      <div class="mt-1" v-if="show.name">
        {{ show.name }}
        <div class="mt-1">
          <span>
            <b-icon icon="star-fill" class="star-icon mx-1"></b-icon>
          </span>
          <span class="text show-average" v-if="show.rating.average">
          {{ show.rating.average }}
        </span>
          <span v-else class="text"> NA </span>
          <span class="mx-2 text">|</span>
          <span>
            <b-icon icon="calendar" class="mx-1 heading"></b-icon>
          </span>
          <span class="text show-premiered" v-if="show.premiered">
            {{ show.premiered }}
          </span>
          <span v-else class="text "> NA </span>
          <div class="show-genres">
          {{ show.genres.join(", ") }}
        </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["show"],
};
</script>

<style scoped>
img:hover {
  opacity: 0.8;
}

</style>