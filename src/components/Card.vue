<template>
  <div class="mb-3 mt-4 myCard" >
        <router-link :to="{ name: 'FullDetailsOfShow', params: { id: show.id } }">
      <img :src="show.image.medium || show.image.original" v-if="show.image" class="space" />
      <div v-else>
        <h2>Image Not Available</h2>
      </div>
        <div class="mt-1 buttonOrder" v-if="show.name">
        <h6>{{ show.name }}</h6>
        <div class="mt-1">
           <!-- <div class="mt-1"    variant="warning" v-if="show.name">
       // want color to rating: and genre how???-->
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
        <!--<b-button class="myButton" @click="displayCardDetails">GetMoreDetails</b-button>-->
      </div>
        </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["show"],
  //methods:{
    //displayCardDetails(){
    //this.$router.push({ name: 'FullDetailsOfShow', params: { id: this.show.id } })
    //}
  //}
};
</script>

<style scoped>
.myCard{
  height:100%;
}
img:hover {
  opacity: 0.8;
}
.space{
width: 90%;
}

.buttonOrder{
  position: relative;
  height:100%;
}
.myButton{
 position: relative;
bottom:4px;
}
</style>