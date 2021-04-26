<template>
  <div class="show-detail">
    <b-row>
      <div class="ml-3 backButton">
        <div>
          <b-button class="mt-4" variant="success" @click="$router.go(-1)">
            <b-icon icon="arrow-left"></b-icon>
          </b-button>
        </div>
      </div>
    </b-row>
    <br />
    <template v-if="show">
      <b-container fluid>
        <b-row>
          <b-col lg="4" md="6" sm="6">
            <p>Show Poster</p>
            <img
              Show
              Image
              :src="show.image.medium || show.image.original"
              v-if="show.image"
            />
            <div v-else>
              <h3>Image Not Available</h3>
            </div>
          </b-col>
          <b-col lg="8" md="6" sm="6">
            <div class="text-warning">
              <h2><b>Full Details Of Show</b></h2>
            </div>
            <h3>{{ show.name }}</h3>
            <div class="align">
              <span>
                <b>Rating: </b>
                <b-icon icon="star-fill" class="star-icon"></b-icon>
              </span>
              <span class="ml-1" v-if="show.rating">
                {{ show.rating.average }}
              </span>
              <span v-else class="ml-1">NA</span>
              <div>
                <span>
                  <b>premiered on:</b>
                </span>
                <span v-if="show.premiered">
                  {{ show.premiered }}
                </span>
                <span v-else class="ml-1">NA</span>
              </div>
              <span>
                <b>Genre :</b>
              </span>
              <span class="show-genres ml-1" v-if="this.genre.length > 0">
                {{ show.genres.join() }}
              </span>
              <span v-else class="ml-1">NA</span>
              <div>
                <span v-if="show.language">
                  <b>Language :</b>{{ show.language }}</span
                >
              </div>
              <div v-if="show.schedule">
                <b>Schedule :</b>
                <span
                  v-for="tvSchedule in show.schedule.days"
                  :key="tvSchedule.index"
                >
                  {{ tvSchedule }}
                  <span v-if="show.schedule.time">
                    at {{ show.schedule.time }}</span
                  >
                </span>
              </div>
              <div>
                <span class="black--text" v-if="show.status">
                  <b>Status :</b>
                  {{ show.status }}
                </span>
              </div>
              <div>
                <span class="black--text" v-if="show.officialSite">
                  <b>Official Site :</b>
                  <a :href="show.officialSite">{{ show.officialSite }}</a>
                </span>
              </div>
            </div>
            <div class="mt-5 summary">
              <h2>Summary</h2>
              <p v-if="show.summary" v-html="show.summary"></p>
              <p v-else>Not Available</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div>
        <h2>Seasons</h2>
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
        <h2>Cast</h2>
        <template v-if="casts.length > 0">
          <b-row>
            <b-col lg="3" md="4" sm="6" v-for="cast in casts" :key="cast.index">
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
  getShowDetailsById,
  getShowSeasonById,
  getShowCastsById,
} from "../service/tvShow.api.js";

export default {
  name: "FullDetailsOfShow",
  components: {
    Season,
    Cast,
  },
  data() {
    return {
      show: {},
      casts: [],
      seasons: [],
      rating: "",
      premiered: "",
      genre: "",
    };
  },
  created() {
    this.showDetails(this.$route.params.id);
  },
  methods: {
    async showDetails(id) {
      await getShowDetailsById(id).then((response) => {
        this.show = response.data;
      });
      await getShowSeasonById(id).then((response) => {
        this.seasons = response.data;
      });
      await getShowCastsById(id).then((response) => {
        this.casts = response.data;
      });
      this.genre = this.show.genres;
    },
  },
};
</script>

<style scoped>
.align {
  text-align: left;
  margin-left: 30%;
}
</style>
