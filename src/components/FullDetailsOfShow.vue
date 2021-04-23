<template>
  <div class="show-detail">
    <b-row>
    <div class="ml-3  backButton">
      <b-button variant="success" @click="$router.go(-1)">
        <b-icon icon="arrow-left"></b-icon>
      </b-button>
    </div>
    </b-row>
    <br />
    <template v-if="show">
      <b-container fluid>
        <b-row>
          <b-col lg="4" md="6" sm="6">
            <img
              :src="show.image.medium || show.image.original"
              v-if="show.image"/>
            <div v-else >
              <h3>Image Not Available</h3>
            </div>
          </b-col>
          <b-col lg="8" md="6" sm="6">
            <h2 >{{ show.name }}
            </h2>
            <div>
              <span>
                <b-icon icon="star-fill" class="star-icon"></b-icon>
              </span>
              <span class="ml-1" v-if="this.rating">
                {{ show.rating.average }}
              </span>
              <span v-else class="ml-1">NA</span>
              <span class="mx-2">|</span>
              <span>
                <b-icon icon="calendar"></b-icon>
              </span>
              <span
                v-if="this.premiered"
              >
                {{ show.premiered }}
              </span>
              <span v-else class="ml-1">NA</span>
              <span class="mx-2">|</span>
              <span>
                <b-icon icon="film"></b-icon>
              </span>
              <span
                class="show-genres ml-1 "
                v-if="this.genre.length > 0"
              >
                {{ show.genres.join() }}
              </span>
              <span v-else class="ml-1 ">NA</span>
            </div>
            <div class="mt-5 summary">
              <h2>
              Summary
              </h2>
              <p
                v-if="show.summary"
                v-html="show.summary"
              ></p>
              <p v-else>Not Available</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div>
        <h2>
        Seasons
        </h2>
        <template v-if="seasons.length > 0">
          <b-row>
            <b-col
              lg="3"
              md="4"
              sm="6"
              v-for="season in seasons"
              :key="season.index"
            >
              <season :season="season"> </season>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <div>
            <h2><em>No seasons are available </em></h2>
          </div>
        </template>
      </div>
      <div>
        <h2>
           Cast
        </h2>
        <template v-if="casts.length > 0">
          <b-row>
            <b-col
              lg="3"
              md="4"
              sm="6"
              v-for="cast in casts"
              :key="cast.index"
            >
              <cast :cast="cast"> </cast>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <div>
            <h2><em>No casts are available </em></h2>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import Season from "./Season.vue";
import Cast from "./Cast.vue";
import {
  getShowDetails,
  getShowSeason,
  getShowCasts,
} from "../service/tvShow.api.js";

export default {
  name: "FullDetailsOfShow",
  components: {
    Season,
     Cast
  },
  data() {
    return {
      show: {},
      casts: [],
      seasons: [],
      rating: "",
      premiered: "",
      genre: ""
    };
  },
  created() {
    this.showDetails(this.$route.params.id);
  },
  methods: {
    async showDetails(id) {
      await getShowDetails(id).then((response) => {
        this.show = response.data;
      });
      await getShowSeason(id).then((response) => {
        this.seasons = response.data;
      });
      await getShowCasts(id).then((response) => {
        this.casts = response.data;
      });
      this.rating = this.show.rating.average;
      this.premiered = this.show.premiered;
      this.genre = this.show.genres;
    }
  }
};
</script>
