<template>
  <div class="mb-3 mt-4 myCard">
    <router-link :to="{ name: 'FullDetailsOfShow', params: { id: show.id } }">
      <img
        :src="show.image.medium || show.image.original"
        v-if="show.image"
        class="space"
      />
      <div v-else>
        <h2>Image Not Available</h2>
      </div>
      <div class="mt-1" v-if="show.name">
        <h6 class="text-success">
          <b>{{ show.name }}</b>
        </h6>
        <div class="mt-1">
          <span>
            <b>Rating: </b>
            <b-icon icon="star-fill" class="star-icon mx-1"></b-icon>
          </span>
          <span class="text show-average" v-if="show.rating.average">
            {{ show.rating.average }}
          </span>
          <span v-else class="text"> NA </span>
          <div>
            <b-icon icon="calendar" class="mx-1 heading"></b-icon>
            <span class="text show-premiered" v-if="show.premiered">
              {{ show.premiered }}
            </span>
            <span v-else class="text"> NA </span>
          </div>
          <div class="show-genres">
            <span><b>Genre: </b></span>
            {{ show.genres.join(", ") }}
          </div>
        </div>
        <b-button @click="displayCardDetails">GetDetails</b-button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["show"],
  methods: {
    // To get fulldetailsOfShow when we click the button
    displayCardDetails() {
      this.$router.push({
        name: "FullDetailsOfShow",
        params: { id: this.show.id },
      });
    },
  },
};
</script>

<style scoped>
.myCard {
  height: 80%;
  background-color: rgb(54, 44, 61);
}
img:hover {
  opacity: 0.8;
}
.space {
  width: 100%;
}
.show-genres {
  height: 100px;
}
</style>